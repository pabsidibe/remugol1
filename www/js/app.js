// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','ngAnimate'])

.run(function($ionicPlatform,$rootScope,$state,store) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  var stateChangeStartHandler = function(e, toState, toParams, fromState, fromParams) {
    if(toState.name != 'login' && !store.getCredential().pseudo)  {
      if((toState.name != 'signup')){
        // console.log(toState);
        console.log('appjs');
        console.log(store.getCredential());
        // $state.go('login');
        e.preventDefault();
        $state.transitionTo('login');
      }
    }
};

$rootScope.$on('$stateChangeStart', stateChangeStartHandler);

});



  //  .config(['$httpProvider', function($httpProvider) {
  //  $httpProvider.defaults.useXDomain = true;
  //  $httpProvider/  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  //}
  //]);
