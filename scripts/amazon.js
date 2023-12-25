import {cart} from "../data/cart.js";
import {products} from "../data/products.js";
let productsHtml = '';

products.forEach((product)=>{
  productsHtml += `
  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id ="${product.id}"> 
      Add to Cart
    </button>
  </div>
  `;
});
document.querySelector('.js-products-grid').innerHTML= productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;  //get product name out
    let matchingItem;
    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
        
      }
    });
    //const quantitySelector = document.quarySelector(`.js-quantity-selector-${productId}`);
    //const value = quantitySelector.value;  //string
    

    if(matchingItem){
      //matchingItem.quantity += 1;
      matchingItem.quantity += Number(document.querySelector(`.js-quantity-selector-${productId}`).value); 
      //we are selecting productId insted of product.id because because we are getting poduct.id as productId when we click button using data element as detaset kebab ---> camel case.
      //we use .value to get the value out from select element
      //we use Number() to convert the value into number because dom usually gives us a string. 
    }else{
      //add the product to the cart
      cart.push({
        productId : productId,
        quantity : Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
      }); 
    }
    //calculate quantity 
    let quantity=0;
    cart.forEach((product) => {
      quantity += product.quantity;
    });
    //display quantity using the dom
    document.querySelector('.js-cart-quantity').innerHTML = quantity;
    console.log(quantity);
    console.log(cart);
  });
});