const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

// Initialize a GraphQL schema
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root resolver
let root = {
  hello: () => "Hello world!"
};

// Create an express server and a GraphQL endpoint
let app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, // Must be provided
    rootValue: root,
    graphiql: true // Enable GraphiQL when server endpoint is accessed in browser
  })
);
app.listen(3000, () => console.log("Now browse to localhost:3000/graphql"));
