const { ApolloServer, gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    price: Int
    isCool: Boolean
    contact: [String]
    products(filter: productFilterInput): [Product!]!
    numberOfAnimals: Int
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    id: String!
    image: String!
    categoryId: String!
    category: [Category!]!
    reviews: [Review!]!
  }

  type Mutation {
    addCategory(input: AddCategory!): Category!
    addProduct(input: AddProduct!): Product!
    addReview(input: AddReview!): Review!
  }

  type Category {
    name: String!
    id: String!
    products(filter: productFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    date: String!
    rating: Int!
    comment: String!
  }

  input productFilterInput {
    onSale: Boolean!
  }

  input AddCategory {
    name: String!
  }

  input AddProduct {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: String!
  }

  input AddReview {
    title: String!
    date: String!
    rating: Int!
    comment: String!
  }
`;
