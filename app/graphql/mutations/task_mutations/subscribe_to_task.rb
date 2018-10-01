module Mutations
  class TaskMutations::SubscribeToTask < GraphQL::Schema::RelayClassicMutation

    argument :uuid, String, required: true

    ## return
    field :task, Types::TaskType, null: true

    def resolve(uuid:)
      return null if context[:session][:token].nil?
      user = User.find context[:session][:token]
      task = Task.find_by_uuid(uuid)
      unless task.users.exists? user.id
        task.users << user
      end

      { task: task }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
