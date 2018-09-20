Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get 'app', to: 'app#index'
  root to: 'app#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
