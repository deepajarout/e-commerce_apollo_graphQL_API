const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./scema");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const {Mutation} = require("./resolvers/Mutation");
const { db} = require("./db"); //using context

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation
  },
  context:{
    db,
  }
});

server.listen().then(({ url }) => {
  console.log("server is runnning at  " + url);
});
