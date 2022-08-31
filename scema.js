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
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
    updateProduct(id: ID!, input: UpdateProductInput!): Product
    updateReview(id: ID!, input: UpdateReviewInput!): Review
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
    categoryId: String!
  }

  input AddReview {
    title: String!
    date: String!
    rating: Int!
    comment: String!
    productId:String!
  }

  input UpdateCategoryInput {
    name: String!
  }

  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String
  }

  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;
