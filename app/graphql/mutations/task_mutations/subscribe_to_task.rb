module Mutations
  class TaskMutations::SubscribeToTask < GraphQL::Schema::RelayClassicMutation

    argument :uuid, String, required: true

    ## return
    field :task, Types::TaskType, null: true

    def resolve(uuid:)
      current_user_id = 1
      task = Task.find_by_uuid(uuid)
      unless task.users.exists? current_user_id
        task.users << User.find(current_user_id)
      end

      { task: task }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
