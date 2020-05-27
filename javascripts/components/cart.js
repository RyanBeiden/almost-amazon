import utils from '../helpers/utils.js';
import cartData from '../helpers/data/cartData.js';

const addToCart = (newBook) => {
  cartData.setCart(newBook);
  cartToDom();
}

const cartToDom = () => {
  const myCart = cartData.getCart();
  let domString = `
    <div class="d-flex justify-content-center">
      <h3>CART</h3>
    </div>
  `;
  for (let i = 0; i < myCart.length; i++) {
    const cartItem = myCart[i];
    domString += `
      <div class="d-flex justify-content-center">
        <h4 id="cart-text">${cartItem.title}</h4>
      </div>
    `;
  }

  utils.printToDom('#cart', domString);
}

export default { addToCart };
