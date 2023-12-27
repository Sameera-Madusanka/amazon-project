export const cart = [{
  productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity : 2
},{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}]; 

export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
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
}