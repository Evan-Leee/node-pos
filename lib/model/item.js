var Fixture = require('../../tests/fixtures');


exports.Item = function (barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
};


exports.find = function (barcode) {
  var allItems = Fixture.loadAllItems();

  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i];

    if (item.barcode === barcode) {
      return item;
    }
  }
};

