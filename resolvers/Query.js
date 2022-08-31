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
  products: (parent, { filter }, { db }) => {
    let filterData = db.products;
    if (filter) {
      if (filter.onSale && filter.onSale == true) {
        return filterData.filter((product) => product.onSale == filter.onSale);
      }
      return filterData.filter((product) => product.onSale == filter.onSale);
    } else {
      return filterData;
    }
  },
  product: (parent, args, { db }) => {
    if (args) {
      return db.products.find((product) => product.id == args.id);
    }
  },
  categories: (parent, args, { db }) => { 
    return db.categories;
  },
  category: (parent, args, { db }) => {
    //(parent, args,context)
    return db.categories.find((product) => product.id == args.id);
  },
};
