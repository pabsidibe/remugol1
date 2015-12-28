angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('signup', {
      url: '/page9',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })


     .state('home.back', {
     // url: '/back',
      //templateUrl: 'templates/login.html',
      controller: function($scope,$ionicHistory) {

        $scope.myGoBack = function() {
    $ionicHistory.goBack();
  }
      }
    })





// .state('signup', {
//       url: '/page9',
//       templateUrl: 'templates/signup.html',
//       controller: 'signupCtrl'
//     })




    .state('home', {
      url: '/Home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })





    .state('previsions', {
      url: '/Previsions',
      abstract:true,
      templateUrl: 'templates/previsionsMaster.html',
      controller: 'previsionsCtrl'
    })
    // .state('previsions.page1', {
    //   url: '',
    //   templateUrl: 'templates/previsions.html'
    // })
    .state('previsions.page1', {
      url: '',
      templateUrl: 'templates/previsions.html'
    })
    .state('previsions.page2', {
      url: '/step_2',
      templateUrl: 'templates/previsionsSuite.html'
    })





    .state('stock', {
      url: '/Stocks',
        abstract:true,
      templateUrl: 'templates/stockMaster.html',
      controller: 'stockCtrl'
    })
      .state('stock.page1', {
        url: '',
        templateUrl: 'templates/stock.html'
      })
      .state('stock.page2', {
        url: '',
        templateUrl: 'templates/stockSuite.html'
      })
      .state('stock.page3', {
        url: '',
        templateUrl: 'templates/stockSuite1.html'
      })

      .state('EditCompte', {
        url: '/EditCompte',
        abstract:true,
        templateUrl: 'templates/EditCompteMaster.html',
        controller: 'EditCtrl'
      })
      .state('EditCompte.page1', {
        url: '',
        templateUrl: 'templates/EditCompte.html'
      })
      .state('EditCompte.page2', {
        url: '',
        templateUrl: 'templates/EditCompteSuite.html'
      })



    .state('produit', {
      url: '/Produits',
        abstract:true,
      templateUrl: 'templates/produitMaster.html',
      controller: 'produitCtrl'
    })
      .state('produit.page1', {
        url: '',
        templateUrl: 'templates/produit.html'

      })
      .state('produit.page2', {
        url: '',
        templateUrl: 'templates/produitSuite.html'
      })
      // .state('produit.page3', {
      //   url: '/step_2',
      //   templateUrl: 'templates/produitSuiteSuite.html'
      // })





    .state('archivesPrevisions', {
      url: '/archives/Previsions',
      templateUrl: 'templates/archivesPrevision.html',
      controller: 'archivePrevisionCtrl'
    })
      .state('archivesRecoltes', {
        url: '/archives/Recoltes',
        templateUrl: 'templates/archivesRecolte.html',
        controller: 'archiveRecolteCtrl'
      })
      .state('archivesProduits', {
        url: '/archives/Produits',
        templateUrl: 'templates/archivesProduit.html',
        controller: 'archiveProduitCtrl'
      })
    .state('Bienvenue', {
      url: '/page9',
      templateUrl: 'templates/Bienvenue.html',
      controller: 'bCtrl'
    })

    ;

     $urlRouterProvider.otherwise('/Home');





});
