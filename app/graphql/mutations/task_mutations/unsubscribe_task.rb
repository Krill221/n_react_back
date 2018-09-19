module Mutations
  class TaskMutations::UnsubscribeTask < GraphQL::Schema::RelayClassicMutation

    argument :uuid, String, required: true

    ## return
    field :task, Types::TaskType, null: true

    def resolve(uuid:)
      return null if context[:session][:token].nil?
      user = User.find_by_token context[:session][:token]
      task = Task.find_by_uuid(uuid)
      if task.users.exists? user.id
        Subscription.where(:task_id => task.id, :user_id => user.id).first.delete
      end

      { task: task }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
