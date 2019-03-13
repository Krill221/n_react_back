module Mutations
  class TaskMutations::RemoveMessage < GraphQL::Schema::RelayClassicMutation

    argument :messageid, ID, required: true

    ## return
    #field :message, Types::MessageType, null: true
    field :id, ID, null: false


    def resolve(messageid:)
      raise "user token is nil" if context[:session][:token].nil?

      current_user = User.find context[:session][:token]

      message = Message.update(messageid, deleted: true)
      { id: message.id }
    rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
