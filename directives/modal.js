angular.module('modal', [])
    .directive('modal', function () {
        return {
            restrict: 'E',
            scope: {
                show: '=',
            },
            transclude: true,
            template:
                '<div class="popup" ng-show="show">' +
                '    <div class="popup__overlay" ng-click="show=false" style="position:fixed; top: 0; bottom: 0; left: 0; right: 0"></div>' +
                '    <div class="popup__x-button">x</div>' +
                '    <div class="popup__content" ng-transclude></div>' +
                '    <div class="popup__buttons"></div>' +
                '</div>'
        }
    });
