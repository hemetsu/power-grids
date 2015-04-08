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

  .state('setup', {
      url : '/setup',
      views: {
        'main': {
            templateUrl : 'templates/setup.html',
            abstract : true
        }
      }
  })

  .state('setup.config', {
      url: '/config',
      views: {
          'config': {
              templateUrl: 'templates/tab-config.html',
              controller : 'SetupCtrl'
          }
      }
  })

  .state('setup.phase1', {
      url: '/phase1',
      views: {
          'phase1': {
              templateUrl: 'templates/tab-phase1.html',
              controller : 'SetupCtrl'
          }
      }
  })

  .state('setup.phase2', {
      url: '/phase2',
      views: {
          'phase2': {
              templateUrl: 'templates/tab-phase2.html',
              controller : 'SetupCtrl'
          }
      }
  })

  .state('setup.phase3', {
      url: '/phase3',
      views: {
          'phase3': {
              templateUrl: 'templates/tab-phase3.html',
              controller : 'SetupCtrl'
          }
      }
  })

  .state('calculator', {
      url: '/calculator',
      views: {
          'main': {
              templateUrl: 'templates/calculator.html',
              controller : 'CalculatorCtrl'
          }
      }
  })

  .state('timer', {
       url: '/timer',
       views: {
           'main': {
               templateUrl: 'templates/timer.html',
               controller : 'TimerCtrl'
           }
       }
  })

  .state('faq', {
       url: '/faq',
       views: {
           'main': {
               templateUrl: 'templates/faq.html',
               controller : 'FaqCtrl'
           }
       }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/setup/config');

});
