module Types
  class QueryType < Types::BaseObject

    field :tasks, [Types::TaskType], null: false,
      description: "tasks"
    def tasks
      return Task.order(:id => :desc)
    end

    field :tasks_by_user, [Types::TaskType], null: false,
      description: "tasksByUser"
    def tasks_by_user
      return [] if context[:session][:token].nil?
      user = User.find context[:session][:token]
      return user.tasks
        .joins('LEFT JOIN "messages" ON "messages"."task_id" = "tasks"."id"')
        .select('tasks.*, max(subscriptions.like) as my_like, count(case when "messages"."created_at" > subscriptions.read_date then 1 else null end) as my_unreaded_msg_count, MAX(messages.created_at) as max_msg_date, MAX(subscriptions.read_date) as my_read_date')
        .group('tasks.id').order(:id => :desc)
    end

    field :task, Types::TaskType, null: true do
      argument :id, ID, required: true
    end
    def task(id:)
      return Task.includes(:images).eager_load(:images).order('images.created_at DESC').find(id)
    end

    field :task_images, [Types::MessageType], null: true do
      argument :taskid, ID, required: true
    end
    def task_images(taskid:)
      return Message.where(:task_id => taskid)
                .where(:contenttype => 'img')
                .order(:created_at => :asc)
    end

    field :messages, [Types::MessageType], null: true do
      argument :taskid, ID, required: true
    end
    def messages(taskid:)
      current_user = User.find context[:session][:token]
      subs = Subscription.where(:user_id => current_user.id, :task_id => taskid)
      read_date = subs.first.read_date
      #unless subs.empty?
      #  subs.first.update!(:read_date => DateTime.now )
      #end
      p read_date.to_s
      return Message.preload(:user).select('messages.*, CASE WHEN messages.created_at > TIMESTAMP \''+read_date.to_s+'\' THEN 1 ELSE 0 END as unreaded').where(:task_id => taskid).order(:created_at => :asc)
    end


    # AUTH
    field :current_user, Types::UserType, null: false,
      description: 'fetch the current user.'
    def current_user
      return User.find context[:session][:token]
    end

    # AUTH
    field :current_user_token, String, null: false,
      description: 'fetch the current user token.'
    def current_user_token
      unless context[:session].nil?
       context[:session][:token].to_s
     else
       ''
     end
    end

    # PUSH
    field :current_user_expo_push_token, String, null: false,
      description: 'get current_user_expo_push_token'
    def current_user_expo_push_token
      return '' if context[:session][:token].nil?
      user = User.find context[:session][:token]
      return '' if user.nil?
      return user.expo_push_token
    end

    # PUSH
    field :current_expo_push_token_state, Boolean, null: false,
      description: 'get expo push state'
    def current_expo_push_token_state
      return false if context[:session][:token].nil?
      user = User.find context[:session][:token]
      return false if user.nil?
      return user.expo_push_token != ''
    end

  end
end
