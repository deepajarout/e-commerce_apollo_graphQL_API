// const { categories } = require("../db");  //import data using context

exports.Product = {
  category: (parent, args, { categories }) => {
    return categories.filter((product) => product.id == parent.categoryId);
  },
  reviews: (parent, args, {reviews})=>{
    return reviews.filter((review) => review.productId == parent.categoryId);
  }
};
