const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    price: Int
    isCool: Boolean
    contact: [String]
    products:[Product!]!
    numberOfAnimals:Int
    product:Product
  }

  type Product {
    name: String!
    description:String!
    quantity:Int!
    price:Float!
    onSale:Boolean!
    id:String!
    image:String!
  }
`;

const products = [{
  id:"1",
  name: "jeans",
  description:"Its branded jeans and quality is very good of this products",
  quantity:20,
  price:200.4,
  onSale:true
},
{ id:"2",
  name: "jeans High Waist",
  description:"Its branded jeans and quality is very good of this products",
  quantity:20,
  price:200.4,
  onSale:true
},
{
  id:"3",
  name: "jeans skinny",
  description:"Its branded jeans and quality is very good of this products",
  quantity:20,
  price:200.4,
  onSale:false
}];

const resolvers = {
  Query: {
    hello: ()=>{
      return "Hello World !";
    },
    numberOfAnimals : ()=>{
      return 4
    },
    price: ()=>{
      return 200
    },
    isCool: ()=>{
      return true
    },
    contact: ()=>{
      return ["sms", "email", "phone", "DM"]
    },
    products: ()=>{
      return products
    },
    product:(args)=>{
      return products.filter((pro)=>pro.id=products.id);
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("server is runnning at  " + url);
});
