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
      current_user_id = 1
      return User.find(current_user_id).tasks.order(:id => :desc)
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

  end
end
