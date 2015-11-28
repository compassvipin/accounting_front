angular.module('scotchApp').service('registerServices', function ($http) {        

	this.getCompanyDetails= function(registerDetails){
                console.log(registerDetails);
		requestJson ={};               
		return $http({method: 'post', url: 'http://localhost:1337/createUserData',data: requestJson});
	};
});
