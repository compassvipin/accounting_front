angular.module('scotchApp').service('registerServices', function ($http) {        

	this.createUserRegistration = function(registerDetails){                              
		return $http({method: 'post', url: 'http://localhost:1337/createUserData',data: registerDetails});
	};
});
