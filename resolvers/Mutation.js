exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    let data = {
      id: db.categories.length + 1 + "",
      name: name,
    };
    db.categories.push(data);
    return data;
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, onSale, categoryId } = input;
    let data = {
      id: db.products.length + 1 + "",
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      onSale: onSale,
      categoryId: categoryId,
    };
    db.products.push(data);
    return data;
  },

  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input;
    let data = {
      id: db.reviews.length + 1 + "",
      date: date,
      title: title,
      comment: comment,
      rating: rating,
      productId: productId,
    };
    db.reviews.push(data);
    return data;
  },

//   deleteCategory: (parent, {input}, {categories})=>{
//       console.log("====", input, categories);
//       let data = ategories.filter((cat)=>cat.id===input.id);
//       return categories.pop();
//   }
   deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },
  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
  },
  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);
    if (index === -1) return null;
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },
  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id);
    if (index === -1) return null;
    db.products[index] = {
      ...db.products[index],
      ...input,
    };
    return db.products[index];
  },
  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id);
    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };
    return db.reviews[index];
  },
};
