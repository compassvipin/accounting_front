/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

scotchApp.controller('bussinessController', function ($scope, $http, $location , userDetailsServices) {
    $scope.init = function(){
            userDetailsServices.getUserDetails().success(function (response) {              
                
            });
    };    
    
    $scope.personal =  function() {
        $location.path( "/bussinessMode" );
    }
    $scope.init();
});