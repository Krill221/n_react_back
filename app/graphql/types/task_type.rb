module Types
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :body, String, null: false
    field :uuid, String, null: false
    field :likes, String, null: false
    field :subscriptions, [Types::SubscriptionType], null: false
    field :users, [Types::UserType], null: false
    field :images, [Types::ImageType], null: false
  end
end
