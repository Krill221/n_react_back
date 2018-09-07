module Types
  class MutationType < Types::BaseObject
    field :updateTask, mutation: Mutations::TaskMutations::UpdateTask
  end
end
