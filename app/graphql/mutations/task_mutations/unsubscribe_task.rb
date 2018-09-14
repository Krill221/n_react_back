module Mutations
  class TaskMutations::UnsubscribeTask < GraphQL::Schema::RelayClassicMutation

    argument :uuid, String, required: true

    ## return
    field :task, Types::TaskType, null: true

    def resolve(uuid:)
      current_user_id = 1
      task = Task.find_by_uuid(uuid)
      if task.users.exists? current_user_id
        Subscription.where(:task_id => task.id, :user_id => current_user_id).first.delete
      end

      { task: task }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
