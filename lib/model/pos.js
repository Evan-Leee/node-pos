/**
 * Created by evan on 15-7-23.
var Pos = require('./pos.js');
var pos = new Pos(cart, scanner)
**/
var Receipt = require('./receipt');

function Pos(cart, scanner) {
  this.cart = cart;
  this.scanner = scanner;
  this.receipt = new Receipt();
 }

Pos.prototype.setCartItems = function (tags) {

  for (var i = 0; i < tags.length; i++){

    var cartItem = this.scanner.scan(tags[i]);

    this.cart.addCartItem(cartItem);

    this.receipt.cart = this.cart;
  }

}

Pos.prototype.setItemString = function (){
   this.receipt.setItemString();
}

Pos.prototype.setPormotionString = function (){
  this.receipt.setPormotionString();
}

Pos.prototype.getAmount = function (){
  return this.cart.getAmount();
}
Pos.prototype.itemString = function (){
  return this.receipt.itemString;
}

Pos.prototype.promotionString = function (){
  return this.receipt.promotionString;
}

Pos.prototype.reduce = function (){
  return this.receipt.reduce;
}

module.exports = Pos;
