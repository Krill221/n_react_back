module Types
  class MutationType < Types::BaseObject
    field :addMessage, mutation: Mutations::TaskMutations::AddMessage
    field :updateTask, mutation: Mutations::TaskMutations::UpdateTask
  end
end
