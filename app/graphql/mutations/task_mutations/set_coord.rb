module Mutations
  class TaskMutations::SetCoord < GraphQL::Schema::RelayClassicMutation

    argument :taskid, ID, required: true
    argument :lat, String, required: true
    argument :lng, String, required: true

    ## return
    field :task, Types::TaskType, null: true

   def resolve(taskid:, lat:, lng:)
     task = Task.update(taskid, lat: lat, lng: lng)
     { task: task }
   rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
   end

  end
end
