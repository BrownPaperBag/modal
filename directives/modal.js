angular.module('modal', [])

    .directive('modal', function () {
        return {
            restrict: 'E',
            scope: {
                show: '=',
            },
            transclude: true,
            templateUrl: '/bower/modal/directives/modal.html',
            link: function($scope, $element, $attributes) {
                $('.angular-popup', $element).addClass($attributes.classes);
                $scope.hide = function($event) {
                    $event.stopPropagation();
                    if (typeof $attributes.onclose !== 'undefined') {
                        if (!$scope.$eval($attributes.onclose)) {
                            return;
                        }
                    }
                    $scope.show = false;
                }
            }

        }
    });