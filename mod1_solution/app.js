(function () {
    angular.module('LunchCheck' ,[])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.checkLunch = function () {
            if($scope.lunch) {
                let lunchCount = $scope.lunch.split(",").length;

                if (lunchCount > 3) {
                    $scope.message = "Too much!";
                } else {
                    $scope.message = "Enjoy!";
                }
            } else {
                $scope.message = "Please enter data first";
            }

        }
    }
})();