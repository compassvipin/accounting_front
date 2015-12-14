angular.module('scotchApp').service('companyDetailsServices', function ($http) {        

	this.getCompanyDetails= function(){
		requestJson ={};
		return $http({method: 'get', url: 'http://localhost:1337/getCompanyData',data: requestJson});
	};
});
