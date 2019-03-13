module Types
  class MessageType < Types::BaseObject
    field :id, ID, null: false
    field :contenttype, String, null: false
    field :text, String, null: false
    field :task_id, ID, null: false
    field :onserver, String, null: false
    field :time, String, null: false
    field :user, Types::UserType, null: false
    field :unreaded, String , null: true
    field :deleted, String , null: true
  end
end
