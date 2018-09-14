module Types
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :body, String, null: false
    field :uuid, String, null: false
  end
end
