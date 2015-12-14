angular.module('scotchApp').service('userDetailsServices', function ($http) {        

	this.getUserDetails= function(){
		requestJson ={};
		return $http({method: 'get', url: 'http://localhost:1337/getDashBoardData',data: requestJson});
	};
});
