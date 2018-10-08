module Mutations
  class TaskMutations::UpdateTask < GraphQL::Schema::RelayClassicMutation

    argument :id, ID, required: true
    argument :name, String, required: true
    argument :body, String, required: true

    ## return
   field :id, ID, null: true
   field :name, String, null: true
   field :body, String, null: true

   def resolve(id:, name:, body:)
     task = Task.update(id, name: name, body: body)
     { id: task.id, name: task.name, body: task.body }
   rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
   end

  end
end
