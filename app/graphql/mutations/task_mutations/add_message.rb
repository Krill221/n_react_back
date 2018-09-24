module Mutations
  class TaskMutations::AddMessage < GraphQL::Schema::RelayClassicMutation

    argument :taskid, ID, required: true
    argument :contenttype, String, required: true
    argument :text, String, required: true

    ## return
    field :message, Types::MessageType, null: true

    def resolve(taskid:, contenttype:, text:)
     message = Message.create!(text: text,
        contenttype: contenttype, task_id: taskid)

     # send push to all subscribed users
     current_user = User.find_by_token context[:session][:token]
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
     { message: message }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
