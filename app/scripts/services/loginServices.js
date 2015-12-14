/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('scotchApp').service('loginServices', function ($http) {
        this.userLogin = function(userData){                              
		return $http({method: 'post', url: 'http://localhost:1337/userLogin',data: userData});
	};
});