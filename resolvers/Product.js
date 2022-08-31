// const { categories } = require("../db");  //import data using context

exports.Product = {
  category: (parent, args, { db}) => {
    return db.categories.filter((product) => product.id == parent.categoryId);
  },
  reviews: (parent, args, {db})=>{
    return db.reviews.filter((review) => review.productId == parent.categoryId);
  }
};
