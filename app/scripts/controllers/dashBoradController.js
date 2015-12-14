/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

scotchApp.controller('dashBordController', function ($scope, $http, $location , userDetailsServices) {
    $scope.init = function(){
            userDetailsServices.getUserDetails().success(function (response) {              
                
            });
    };    
    
    $scope.pageLink =  function(type) {
        switch(type) {
            case 'bussiness':
                $location.path("/bussinessMode");
                break;
            case 'purchase':
                $location.path("/purchaseMode");
                break;
             case 'sales':
                $location.path("/salesMode");
                break;                
            case 'account':
                $location.path("/accountMode");
                break;
            case 'settings':
                $location.path("/settingsMode");
                break;
            
        }
    }
        $scope.save =  function() {
            alert();
        }
        
        $scope.paymentPage = function(type){
           $location.path(type+"Payment"); 
        }
    
    $scope.init();
});

