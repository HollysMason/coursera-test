(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListAddController', ShoppingListAddController)
  .controller('ShoppingListShowController', ShoppingListShowController)
  .service('ShoppingListService', ShoppingListService);

  ShoppingListAddController.$inject = ['ShoppingListService'];
  function ShoppingListAddController (ShoppingListService) {
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function () {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";
    };
  }

  ShoppingListShowController.$inject = ['ShoppingListService'];
  function ShoppingListShowController (ShoppingListService) {
    var showList = this;

    showList.items = ShoppingListService.getItems();

    showList.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };

    showList.newItemName = "";
    showList.newItemQuantity = "";

    showList.change = function (itemIndex, newName, newQuantity ) {
      ShoppingListService.change(itemIndex, showList.newItemName, showList.newItemQuantity);
    };
  }

  function ShoppingListService () {
    var service = this;

    //List of Shopping items
    var items = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };

      items.push(item);
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    }

    service.change = function (itemIndex, newItemName, newItemQuantity) {
      items[itemIndex].name = newItemName;
      items[itemIndex].quantity = newItemQuantity;
    }
  }

})()
