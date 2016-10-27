(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;

    list1.items = ShoppingListCheckOffService.getItems();

    list1.name = "";
    list1.quantity = "";

    list1.addItem = function (name, quantity) {
      ShoppingListCheckOffService.addItem(list1.name, list1.quantity);
    };

    list1.bought = function (itemIndex) {
      ShoppingListCheckOffService.bought(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;

    list2.items = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [{nameItem: 'cookies', quantity: 10},
                          {nameItem: 'chips', quantity: 20},
                          {nameItem: 'choclate', quantity: 374},
                          {nameItem: 'eggs', quantity: 526},];

    var itemsBought = [];



    service.addItem = function (name, quantity) {
      var item = {
        nameItem: name,
        quantity: quantity
      };
      itemsToBuy.push(item);
    }

    service.bought = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

  }

})()
