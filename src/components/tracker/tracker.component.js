function trackerController(){
    var ctrl = this;

    ctrl.application = {};

    ctrl.delete = function(){
    };
}

angular.module('appTracker').component('tracker', {
    templateUrl: './src/components/tracker/tracker.component.html',
    controller: trackerController
});


var sample = {
    position:"dev",
    company:"x corp",
    contact:"if exists",
    dateSubmitted:"now",
    dateFollowUp:"then",
    didFollowUp:false,
    comment:"comment on this"
}