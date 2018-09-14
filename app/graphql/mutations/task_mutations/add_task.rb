module Mutations
  class TaskMutations::AddTask < GraphQL::Schema::RelayClassicMutation

    argument :name, String, required: true
    argument :body, String, required: true

    ## return
    field :task, Types::TaskType, null: true

    def resolve(name:, body:)
      hex = 'task' + SecureRandom.hex(6)
      task = Task.create!(name: name, body: body, uuid: hex)
      { task: task }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
