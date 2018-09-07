module Types
  class QueryType < Types::BaseObject

    field :tasks, [Types::TaskType], null: false,
      description: "tasks"
    def tasks
      return Task.all
    end

    field :task, Types::TaskType, null: true do
      argument :id, ID, required: true
    end
    def task(id:)
      return Task.find id
    end

  end
end
