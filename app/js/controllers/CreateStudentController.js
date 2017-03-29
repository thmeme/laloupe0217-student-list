angular.module('app')
    .controller('CreateStudentController', function($scope, StudentService) {
        /* Here is your main controller */
        $scope.newStudent = {
            firstname: '',
            lastname: '',
            sexe: '',
            birthdate: '',
            city: '',
            zipCode: '',
            adresse: '',
            github: '',
            email: ''
        };
        $scope.addStudent = function() {
            console.log('coucou');
            StudentService.create($scope.newStudent).then(function(res) {
                $scope.newStudent = {
                    firstname: '',
                    lastname: '',
                    sexe: '',
                    birthdate: '',
                    city: '',
                    zipCode: '',
                    adresse: '',
                    github: '',
                    email: ''
                };
            }, function(err) {});
        };
    });
