module Mutations
  class TaskMutations::AddImage < GraphQL::Schema::RelayClassicMutation
    argument :taskid, ID, required: true
    argument :url, String, required: true

    field :id, ID, null: false

    def resolve(taskid:, url:)
      image = Image.create!(
       task_id: taskid,
       url: url
     )
     return {id: image.id}
    end
  end
end
