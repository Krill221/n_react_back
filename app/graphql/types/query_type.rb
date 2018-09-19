module Types
  class QueryType < Types::BaseObject

    field :tasks, [Types::TaskType], null: false,
      description: "tasks"
    def tasks
      return Task.all.order(:id => :desc)
    end

    field :tasks_by_user, [Types::TaskType], null: false,
      description: "tasksByUser"
    def tasks_by_user
      return [] if context[:session][:token].nil?
      user = User.find_by_token context[:session][:token]
      return user.tasks.order(:id => :desc)
    end

    field :task, Types::TaskType, null: true do
      argument :id, ID, required: true
    end
    def task(id:)
      return Task.find id
    end

    field :messages, [Types::MessageType], null: true do
      argument :taskid, ID, required: true
    end
    def messages(taskid:)
      return Message.where :task_id => taskid
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
      description: 'get push state'
    def current_user_expo_push_token
      return [] if context[:session][:token].nil?
      user = User.find_by_token context[:session][:token]
      return user.expo_push_token
    end

  end
end
