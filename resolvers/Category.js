// const { products } = require("../db"); //import data using context

exports.Category = {
  products: (parent, { filter }, { db }) => {
    let filterData = db.products.filter((product) => product.categoryId == parent.id);
    if (filter) {
      if (filter.onSale && filter.onSale == true) {
        return filterData.filter(
          (product) =>
            product.onSale == filter.onSale
        );
      }
      return filterData.filter(
        (product) =>
          product.onSale == filter.onSale
      );
    } else {
      return filterData
    }
  },
};
