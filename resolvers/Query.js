// const { products, categories } = require("../db");

exports.Query = {
  hello: () => {
    return "Hello World !";
  },
  numberOfAnimals: () => {
    return 4;
  },
  price: () => {
    return 200;
  },
  isCool: () => {
    return true;
  },
  contact: () => {
    return ["sms", "email", "phone", "DM"];
  },
  products: (parent, { filter }, { products }) => {
    let filterData = products;
    if (filter) {
      if (filter.onSale && filter.onSale == true) {
        return filterData.filter((product) => product.onSale == filter.onSale);
      }
      return filterData.filter((product) => product.onSale == filter.onSale);
    } else {
      return filterData;
    }
  },
  product: (parent, args, { products }) => {
    if (args) {
      return products.find((product) => product.id == args.id);
    }
  },
  categories: (parent, args, { categories }) => { 
    return categories;
  },
  category: (parent, args, { categories }) => {
    //(parent, args,context)
    return categories.find((product) => product.id == args.id);
  },
};
