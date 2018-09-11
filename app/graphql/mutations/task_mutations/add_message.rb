module Mutations
  class TaskMutations::AddMessage < GraphQL::Schema::RelayClassicMutation

    argument :taskid, ID, required: true
    argument :text, String, required: true

    ## return
    field :message, Types::MessageType, null: true

    def resolve(taskid:, text:)
     message = Message.create!(text: text, task_id: taskid)
     { message: message }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
