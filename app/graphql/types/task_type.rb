module Types
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :body, String, null: false
    field :uuid, String, null: false
    field :my_like, String, null: false
    field :my_read_date, String, null: true
    field :max_msg_date, String, null: true
    field :my_unreaded_msg_count, String, null: true
    field :likes, String, null: false
    field :disLikes, String, null: false
    field :subscriptions, [Types::SubscriptionType], null: false
    field :users, [Types::UserType], null: false
    field :images, [Types::ImageType], null: false
  end
end
