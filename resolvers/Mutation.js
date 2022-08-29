exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    let data = {
      id: categories.length + 1 + "",
      name: name,
    };
    categories.push(data);
    return data;
  },

  addProduct: (parent, { input }, { products }) => {
      console.log("=====",input)
    const { name, description, quantity, price, onSale, categoryId } = input;
    let data = {
      id: products.length + 1 + "",
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      onSale: onSale,
      categoryId: categoryId,
    };
    products.push(data);
    return data;
  },

  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;
    let data = {
      id: reviews.length + 1 + "",
      date: date,
      title: title,
      comment: comment,
      rating: rating,
      productId: productId,
    };
    reviews.push(data);
    return data;
  },
};
