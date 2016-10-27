(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .factory('ShoppingListCheckOffFactory', ShoppingListCheckOffFactory);

  ToBuyController.$inject = ['ShoppingListCheckOffFactory'];
  function ToBuyController(ShoppingListCheckOffFactory) {
    var list1 = this;

    var shoppingList = ShoppingListCheckOffFactory();

    list1.items = shoppingList.getItems();

    list1.name = "";
    list1.quantity = "";

    list1.addItem = function (name, quantity) {
      shoppingList.addItem(list1.name, list1.quantity);
    };

    list1.bought = function (itemIndex) {
      shoppingList.bought(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffFactory'];
  function AlreadyBoughtController(ShoppingListCheckOffFactory) {
    var list2 = this;

    var shoppingList = ShoppingListCheckOffFactory();

    list2.items = shoppingList.getItems();


  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [];

    var itemsBought = [];

    service.itemsBought = [];

    service.addItem = function (name, quantity) {
      var item = {
        nameItem: name,
        quantity: quantity
      };
      itemsToBuy.push(item);
    }

    service.bought = function (itemIndex) {
      itemsToBuy.splice(itemIndex, 1);
      itemsBought.push(itemsToBuy[itemIndex]);
      console.log(itemsBought);
    };

    service.getItems = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

  }

  function ShoppingListCheckOffFactory () {
    var factory = function () {
      return new ShoppingListCheckOffService();
    };
    return factory;
  }
})()
