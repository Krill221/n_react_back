module Mutations
  class TaskMutations::AddLike < GraphQL::Schema::RelayClassicMutation
    argument :taskid, ID, required: true

    field :id, ID, null: false

    def resolve(taskid:)
     current_user = User.find context[:session][:token]
     subs = Subscription.where(:user_id => current_user.id, :task_id => taskid)
     unless subs.empty?
       subs.first.update!(:like => 1)
     end
     return {id: taskid}
    end

  end
end
