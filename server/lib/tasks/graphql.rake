require "graphql/rake_task"
GraphQL::RakeTask.new(
  schema_name: "PtEstimatorSchema",
  dependencies: :environment,
  json_outfile: "schema.json"
)
