scotchApp.controller('loginController', function ($scope, $http, companyDetailsServices,registerServices,loginServices) {
    $scope.inavlidfirstname  = "";
    $scope.inavlidlastname  = "";
    $scope.inavlidemail  = "";
    $scope.inavlidpassword  = "";

    $scope.init = function () {

    };
    $scope.getItineraryCityDetails = function (page) {
        companyDetailsServices.getItineraryCityDetails(page).success(function (response) {

        });
    };
   

    $scope.validateRegistartion = function () {
        if ($scope.firstname != undefined && $scope.lastname != undefined && $scope.email != undefined && $scope.password != undefined) {
            if (!$scope.validateEmail($scope.email)) {
                return false;
            }else{
                return true;
            }
        }else{
            $scope.inavlidfirstname  = $scope.inavlidlastname  =  $scope.inavlidemail  = $scope.inavlidpassword  = 'invalidTextField';           
            
        }
    };
    $scope.validateEmail = function (email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
     };
    $scope.LoginUserUser = function(){
        var loginDetails  = {};
            loginDetails.email = $scope.email;
            loginDetails.password = $scope.password;
         loginServices.userLogin(loginDetails).success(function (response) {

         });
    };
    $scope.registerUser = function () {
       if($scope.validateRegistartion()){
        var registerDetails  = {};
            registerDetails.firstname = $scope.firstname;
            registerDetails.lastname = $scope.lastname;
            registerDetails.email = $scope.email;
            registerDetails.password = $scope.password;
         registerServices.createUserRegistration(registerDetails).success(function (response) {

         });
       }
      
    };



    $scope.init();
});