module Types
  class MutationType < Types::BaseObject
    field :updateCurrentUser, mutation: Mutations::UserMutations::UpdateCurrentUser
    field :unsubscribeTask, mutation: Mutations::TaskMutations::UnsubscribeTask
    field :subscribeToTask, mutation: Mutations::TaskMutations::SubscribeToTask
    field :addTask, mutation: Mutations::TaskMutations::AddTask
    field :addMessage, mutation: Mutations::TaskMutations::AddMessage
    field :removeMessage, mutation: Mutations::TaskMutations::RemoveMessage
    field :updateTask, mutation: Mutations::TaskMutations::UpdateTask
    field :addImage, mutation: Mutations::TaskMutations::AddImage
    field :addLike, mutation: Mutations::TaskMutations::AddLike
    field :removeLike, mutation: Mutations::TaskMutations::RemoveLike
    field :addLike, mutation: Mutations::TaskMutations::AddLike
    field :setReadDate, mutation: Mutations::TaskMutations::SetReadDate
    field :setCoord, mutation: Mutations::TaskMutations::SetCoord


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
