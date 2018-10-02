module Mutations
  class TaskMutations::AddMessage < GraphQL::Schema::RelayClassicMutation

    argument :taskid, ID, required: true
    argument :contenttype, String, required: true
    argument :text, String, required: true
    argument :onserver, String, required: true
    argument :tempimg, String, required: true

    ## return
    #field :message, Types::MessageType, null: true
    field :id, ID, null: false
    field :contenttype, String, null: false
    field :text, String, null: false
    field :task_id, ID, null: false
    field :onserver, String, null: false
    field :time, String, null: false
    field :user, Types::UserType, null: false


    def resolve(taskid:, contenttype:, text:, tempimg:, onserver:)
      raise "user token is nil" if context[:session][:token].nil?


      #current_user = User.find context[:session][:token]
      current_user = User.find(1)

     if tempimg != '' && contenttype == 'img' ## Update photo url
       message = Message.find_by_text(tempimg)
       message.text = text
       message.save!
     else
       message = Message.create!(text: text,
        contenttype: contenttype,
        task_id: taskid,
        time: Time.now.strftime("%H:%M"),
        user_id: current_user.id
      )
     end

     # send push to all subscribed users
     Task.find(taskid).users.each do |user|
       #if user.id != current_user.id && user.expo_push_token != '' &&
       #  user.expo_push_token != current_user.expo_push_token
       if user.expo_push_token != ''
         expo_push = Exponent::Push::Client.new
         messages = [{
            to: user.expo_push_token,
            sound: "default",
            body: "У вас новые сообщения!"
          }]
         expo_push.publish messages
       end
     end
     {
       id: message.id,
       contenttype: message.contenttype,
       text: message.text,
       task_id: message.task_id,
       onserver: message.onserver.to_s,
       time: message.created_at.strftime("%H:%M"),
       user: current_user
     }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
