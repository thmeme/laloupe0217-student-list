angular.module('app')
    .controller('StudentController', function($scope, StudentService) {
        /* Here is your main controller */
        $scope.student = [];
        StudentService.getAll().then(function(res) {
            $scope.students = res.data;
        }, function(err) {

        });
    });
