function appDetailController(){
    var ctrl = this;
}

angular.module('appTracker').component('appDetail', {
    templateUrl: './src/components/appDetail/app-detail.component.html',
    controller: appDetailController,
    bindings: {
        appDetail:'>'
    }
});