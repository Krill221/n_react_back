module Mutations
  class UserMutations::AddExpoPushToken < GraphQL::Schema::RelayClassicMutation

    argument :expopushtoken, String, required: true

    field :token, String, null: false

    def resolve(expopushtoken:)
      # basic validation
      return if expopushtoken.nil?

      user = User.find_by_token context[:session][:token]
      user.expo_push_token = expopushtoken
      user.save!

      return {token: expopushtoken }
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
