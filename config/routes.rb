Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  match '*path', to: 'app#index', via: :all
  get 'app', to: 'app#index'
  root to: 'app#index'
end
