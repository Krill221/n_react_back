module Mutations
  class Mutations::UserMutations::UpdateCurrentUser < GraphQL::Schema::RelayClassicMutation

   argument :name, String, required: true
   argument :email, String, required: true
   argument :image, String, required: true

   ## return
   field :name, String, null: true
   field :email, String, null: true
   field :image, String, null: true

   def resolve(name:, email:, image:)
     return {user: ''} if context[:session][:token].nil?
     user = User.update( context[:session][:token], name: name, email: email, image: image)
     { name: user.name, email: email, image: image }
   rescue ActiveRecord::RecordInvalid => e
     GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
   end
  end
end
