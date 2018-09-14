module Types
  class MutationType < Types::BaseObject
    field :unsubscribeTask, mutation: Mutations::TaskMutations::UnsubscribeTask
    field :subscribeToTask, mutation: Mutations::TaskMutations::SubscribeToTask
    field :addTask, mutation: Mutations::TaskMutations::AddTask
    field :addMessage, mutation: Mutations::TaskMutations::AddMessage
    field :updateTask, mutation: Mutations::TaskMutations::UpdateTask
  end
end
