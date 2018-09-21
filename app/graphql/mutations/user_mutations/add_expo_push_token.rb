module Mutations
  class UserMutations::AddExpoPushToken < GraphQL::Schema::RelayClassicMutation

    argument :expopushtoken, String, required: true

    field :current_expo_push_token_state, Boolean, null: false
    def resolve(expopushtoken:)
      return {current_expo_push_token_state: false} if expopushtoken.nil?
      user = User.find_by_token context[:session][:token]
      return {current_expo_push_token_state: false} if user.nil?
      user.expo_push_token = expopushtoken
      user.save!

      return {current_expo_push_token_state: (expopushtoken != '')}
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
