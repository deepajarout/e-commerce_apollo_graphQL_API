const products = [
  {
    id: "1",
    name: "jeans",
    description: "Its branded jeans and quality is very good of this products",
    quantity: 20,
    price: 200.4,
    onSale: true,
    categoryId: "1",
  },
  {
    id: "2",
    name: "jeans High Waist",
    description: "Its branded jeans and quality is very good of this products",
    quantity: 20,
    price: 200.4,
    onSale: true,
    categoryId: "2",
  },
  {
    id: "3",
    name: "jeans skinny",
    description: "Its branded jeans and quality is very good of this products",
    quantity: 20,
    price: 200.4,
    onSale: false,
    categoryId: "1",
  },
];

const categories = [
  { id: "1", name: "cloths" },
  {
    id: "2",
    name: "style",
  },
  { id: "3", name: "shoes" },
];
const reviews = [
  {
    id: "1",
    date: "2021-01-01",
    title: "This is bad",
    comment: "when i bought this it broke the stove",
    rating: 1,
    productId: "1",
  },
  {
    id: "2",
    date: "2021-04-23",
    title: "This is good",
    comment: "one of the most decent pots",
    rating: 3,
    productId: "1",
  },
  {
    id: "3",
    date: "2020-04-23",
    title: "is okay",
    comment: "yes it is decent i guess",
    rating: 2,
    productId: "1",
  },
  {
    id: "4",
    date: "2020-07-23",
    title: "terrible",
    comment: "why is it so expensive",
    rating: 1,
    productId: "1",
  },
  {
    id: "5",
    date: "2021-01-01",
    title: "best thing ever",
    comment: "really good bowl",
    rating: 5,
    productId: "2",
  },
  {
    id: "6",
    date: "2021-04-23",
    title: "SUPER HAPPY",
    comment: "this is amazing, only 4 stars tho... :)",
    rating: 4,
    productId: "2",
  },
  {
    id: "7",
    date: "2020-04-23",
    title: "life changing",
    comment: "writing mock data is so boring...",
    rating: 5,
    productId: "2",
  },
  {
    id: "8",
    date: "2020-07-23",
    title: "This is coooooool!",
    comment: "I would totally recommend",
    rating: 5,
    productId: "2",
  },
  {
    id: "9",
    date: "2020-07-23",
    title: "idc",
    comment: "It's a spoon...",
    rating: 3,
    productId: "3",
  },
  {
    id: "10",
    date: "2020-07-23",
    title: "terrible!!!!!!",
    comment:
      "Not good at all!! used it once and got caught 2 days later. now im doing life without parole",
    rating: 1,
    productId: "3",
  },
  {
    id: "11",
    date: "2020-07-23",
    title: "great",
    comment: "Great for planting",
    rating: 5,
    productId: "3",
  },
  {
    id: "12",
    date: "2020-07-23",
    title: "Made well",
    comment: "Strong an firm",
    rating: 5,
    productId: "3",
  },
];

module.exports = {
  products,
  categories,
  reviews,
};