var Discount = require ('./discount');
var Utils = require('./utils');


function Receipt() {
  this.itemString = '';
  this.promotionString = '';
  this.reduce = 0;
  this.cart = undefined;
}

Receipt.prototype.setItemString = function (){
    var that = this;
    var discounter = new Discount();
    discounter.type = this.cart.discountType();

        that.cart
        .cartItems.forEach(function (cartItem) {
           var item = cartItem.item;
           var promotedItem = discounter.isPromotion(cartItem);
           that.itemString +=
               '名称：' + item.name
             + '，数量：' + cartItem.count + item.unit
             + '，单价：' + Utils.formatPrice(item.price)
             + '(元)，小计：' + Utils.formatPrice(cartItem.count * item.price - promotedItem.price)
             + '(元)\n';

         });

};

Receipt.prototype.setPormotionString = function (){
  var that = this;
    that.cart
        .cartItems.forEach(function (cartItem) {
            var discounter = new Discount();
            discounter.type = that.cart.discountType();

    var isPromotion = discounter.isPromotion(cartItem);

    if (isPromotion.item) {
        that.promotionString +=
        '名称：' + isPromotion.item.name +
        '，数量：' + isPromotion.promotionTime + isPromotion.item.unit + '\n';
        that.reduce += cartItem.item.price;
    }
  });

};

module.exports = Receipt;
