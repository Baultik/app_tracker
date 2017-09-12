function infoFormController(){
    var ctrl = this;

    ctrl.application = {};

    ctrl.submit = function(){
    };

    ctrl.clearForm = function(){
        ctrl.application = {};
    };
}

angular.module('appTracker').component('infoForm', {
    templateUrl: './src/components/infoForm/info-form.component.html',
    controller: infoFormController,
    bindings: {
        onDone: '&'
    }
});

var sample = {
    position:"dev",
    company:"x corp",
    contact:"if exists"
}