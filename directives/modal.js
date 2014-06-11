angular.module('modal', [])

    .directive('modal', function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: '/bower/modal/directives/modal.html',
            link: function($scope, $element, $attributes) {
                $('.angular-popup__dialog', $element).addClass($attributes.classes);
                $scope.hide = function($event) {
                    $event.stopPropagation();
                    var eventScope = $scope.$new();
                    eventScope.$event = $event;
                    if (typeof $attributes.onclose !== 'undefined') {
                        if (!eventScope.$eval($attributes.onclose)) {
                            return;
                        }
                    }
                }
            }

        }
    });