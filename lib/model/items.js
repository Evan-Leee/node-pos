var Fixture = require('../../spec/fixtures');


function Items(){

  this.items = [];

};


Items.findItem = function (barcode) {
  var items = Fixture.loadAllItems();
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    if (item.barcode === barcode) {
      return item;
    }
  }
};

module.exports = Items;
