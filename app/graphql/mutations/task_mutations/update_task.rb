module Mutations
  class TaskMutations::UpdateTask < GraphQL::Schema::RelayClassicMutation

    argument :id, ID, required: true
    argument :name, String, required: true
    argument :body, String, required: true

    ## return
   field :task, Types::TaskType, null: true

   def resolve(id:, name:, body:)
     task = Task.update(id, name: name, body: body)
     { task: task }
   rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
   end

  end
end
