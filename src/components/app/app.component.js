function appController() {
    
    }
    
    angular.module('appTracker').component('app', {
        templateUrl: './src/components/app/app.component.html',
        controller: appController,
        transclude: true
    });