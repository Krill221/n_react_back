module Types
  class MutationType < Types::BaseObject
    field :unsubscribeTask, mutation: Mutations::TaskMutations::UnsubscribeTask
    field :subscribeToTask, mutation: Mutations::TaskMutations::SubscribeToTask
    field :addTask, mutation: Mutations::TaskMutations::AddTask
    field :addMessage, mutation: Mutations::TaskMutations::AddMessage
    field :updateTask, mutation: Mutations::TaskMutations::UpdateTask

    # PUSH
    field :addExpoPushToken, mutation: Mutations::UserMutations::AddExpoPushToken

    # AUTH
    field :singInVk, mutation: Mutations::UserMutations::SingInVk
    field :singInFacebook, mutation: Mutations::UserMutations::SingInFacebook
    field :singOut, mutation: Mutations::UserMutations::SingOut
    field :singIn, mutation: Mutations::UserMutations::SingIn
    field :singUp, mutation: Mutations::UserMutations::SingUp

  end
end
