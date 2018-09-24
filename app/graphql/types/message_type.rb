module Types
  class MessageType < Types::BaseObject
    field :id, ID, null: false
    field :contenttype, String, null: false
    field :text, String, null: false
    field :task_id, ID, null: false
  end
end
