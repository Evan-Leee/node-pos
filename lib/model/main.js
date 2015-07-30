
var Cart = require('./cart.js');
var Scanner = require('./scanner.js');
var Pos = require('./pos.js');
var Utils = require('./utils');


function printReceipt(tags) {

  var cart = new Cart();
  var scanner = new Scanner();
  var pos = new Pos(cart, scanner);

  pos.setCartItems(tags);//scan(tags),setCartItems(cartItem)

  pos.setItemString();

  pos.setPormotionString();


  var list =

    '***<没钱赚商店>收据***\n' +
    '打印时间：' + Utils.date() + '\n' +
    '----------------------\n' +
     pos.itemString()+
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    pos.promotionString() +
    '----------------------\n' +
    '总计：' + Utils.formatPrice(pos.getAmount() - pos.reduce()) + '(元)\n' +
    '节省：' + Utils.formatPrice(pos.reduce()) + '(元)\n' +
    '**********************';

  console.log(list);

}


module.exports = printReceipt;
