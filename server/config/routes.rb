Rails.application.routes.draw do
  if Rails.env.development?
    puts "DEVELOPING"
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphql#execute"
  end
  post "/graphql", to: "graphql#execute"
end
