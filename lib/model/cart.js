/**
 * Created by evan on 15-7-23.
 */
var Utils = require('./utils');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function (cartItem) {

  var cartItems = this.cartItems;

  var isExist = this.findCartItem(cartItems, cartItem);

  if (isExist) {
    isExist.count++;
  } else {
    cartItems.push(cartItem);
  }

};


Cart.prototype.findCartItem = function (cartItems, cartItem){

  for (var i = 0; i < cartItems.length; i++) {
    if(cartItems[i].item){
      var isExist = cartItems[i].item.barcode === cartItem.item.barcode;

      if (isExist) {
        return cartItems[i];
      }
    }

  }
};

Cart.prototype.getAmount = function () {
  var amount = 0;

  this.cartItems.forEach(function (cartItem) {
    amount += Utils.getSubTotal(cartItem.count, cartItem.item.price);
  });
  return amount;
};

Cart.prototype.discountType = function (){
  return 'BUY_TWO_GET_ONE_FREE';

}

module.exports = Cart;
