angular.module('app.services', [])

  .factory('BlankFactory', [function(){

  }])

    .factory('$localstorage', ['$window', function($window) {
      return {
        set: function(key, value) {
          $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
          return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
          $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
          return JSON.parse($window.localStorage[key] || '{}');
        }
      }
    }])

  .service('BlankService', [function(){

  }])

   
    
    .service('store', ['$localstorage', function ($localstorage) {
      var storeName = 'riz';
      var storeCnx = 'rizCredential';
      var prevision = 'prevision', stock = 'stock', produit='produit';
      var user = 'user';
      var credentials = 'credentials';
      
     
      function cleanStore(prevision) {
        //add to store
        var store = $localstorage.getObject(storeName);
        if (!store[prevision] || ! store[prevision] instanceof Array ) {
          store[prevision] = [];
          $localstorage.setObject(storeName, store)
        }
      }


      return {
        productionKey: 'toto',
        getStore: function () {
          return $localstorage.getObject(storeName);
        },
        TestCnx: function () {


          //return $localstorage.getObject(storeName);
        },
        getStoreCredential:function()
        {
          return $localstorage.getObject(storeCnx);
        },
        updateStore: function (newStore) {
          $localstorage.setObject(storeName, newStore)
        },
        updateStoreCredential: function (newStore) {
          $localstorage.setObject(storeCnx, newStore)
        },

        getCredential: function(){
          var storeCredential = this.getStoreCredential();
          return storeCredential || {};
        },
        setCredential: function(userCredentials){
          //var storeCredential = this.getStoreCredential();
          this.updateStoreCredential(userCredentials);
        },

        addPrevision: function (newItem) {
          this.addNewItem(newItem, prevision);
        },
        addStock: function (newItem) {
          this.addNewItem(newItem, stock);
        },
        addProduit: function (newItem) {
          this.addNewItem(newItem, produit);
        },
        adduser: function (newItem) {
          this.addNewItem(newItem, user);
        },
        addNewItem: function (newItem, sectionName) {
          cleanStore(sectionName);
          //Add new item
          if (newItem) {
            var store = this.getStore();
            store[sectionName].push(newItem);
            this.updateStore(store);
          }
        },

        getItems: function(sectionName){
          var store = this.getStore();
          return store[sectionName];
        },

        getItem: function(id, sectionName){
          var items = this.getItems(sectionName);
          if(items){
            //TODO SEARCH ITEM HERE
            return {};
          }
        }
      }
    }]
  );


