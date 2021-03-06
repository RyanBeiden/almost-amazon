import bookData from '../helpers/data/bookData.js';
import utils from '../helpers/utils.js';
import cart from './cart.js';

const addToCartEvent = (e) => {
  e.preventDefault();
  const book = bookData.getBook();
  cart.addToCart(book);
};

const makeStore = () => {
  const bookInfo = bookData.getBook();

  const domString = `
    <h2>Our One Book</h2>
    <h4>Buy now! It's only</h4>
    <h3 id="book-price">$${bookInfo.price}</h3>
    <img class="book-image" src="${bookInfo.image}" alt="book cover">
    <button id="add-to-cart" class="btn btn-danger">Add to cart</button>
  `;

  utils.printToDom('#store', domString);

  document.querySelector('#add-to-cart').addEventListener('click', addToCartEvent);
};

export default { makeStore };
