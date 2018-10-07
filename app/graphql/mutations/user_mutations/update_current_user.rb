module Mutations
  class Mutations::UserMutations::UpdateCurrentUser < GraphQL::Schema::RelayClassicMutation

   argument :name, String, required: true
   argument :email, String, required: true
   ## return
   field :name, String, null: true
   field :email, String, null: true

   def resolve(name:, email:)
     return {user: ''} if context[:session][:token].nil?
     user = User.update( context[:session][:token], name: name, email: email)
     { name: user.name, email: email }
   rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
   end
  end
end
