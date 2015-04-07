angular.module('powerGrid', ['ionic', 'PGControllers', 'PGServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('main', {
      url : '/main',
      templateUrl : 'templates/mainContainer.html',
      abstract : true,
      controller : 'MainCtrl'
  })

  .state('main.setup', {
      url: '/setup',
      views: {
          'main': {
              templateUrl: 'templates/setup.html',
              controller : 'SetupCtrl'
          }
      }
  })

  .state('main.calculator', {
      url: '/calculator',
      views: {
          'main': {
              templateUrl: 'templates/calculator.html',
              controller : 'CalculatorCtrl'
          }
      }
  })

  .state('main.timer', {
       url: '/timer',
       views: {
           'main': {
               templateUrl: 'templates/timer.html',
               controller : 'TimerCtrl'
           }
       }
  })

  .state('main.faq', {
       url: '/faq',
       views: {
           'main': {
               templateUrl: 'templates/faq.html',
               controller : 'FaqCtrl'
           }
       }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/timer');

});
