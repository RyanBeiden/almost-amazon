const cart = [];

const setCart = (book) => {
  cart.push(book);
};

const getCart = () => {
  return cart;
};

export default { setCart, getCart };
