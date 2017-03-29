angular.module('app')
    .controller('CreateStudentController', function($scope, StudentService) {
        /* Here is your main controller */
        $scope.nexStudent = {
            firstname: '',
            lastname: '',
            sexe: '',
            birthdate: '',
            zipCode: '',
            adresse: '',
            github: '',
            email: ''
        };
        $scope.addStudent = function() {
            console.log('coucou');
            StudentService.create($scope.newStudent).then(function(res) {
              
            }, function(err) {

            });
        };
    });
