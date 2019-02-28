module Types
  class SubscriptionType < Types::BaseObject
    field :id, ID, null: false
    field :like, String, null: false
  end
end
