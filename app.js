/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var scotchApp = angular.module('scotchApp',['ngRoute']);

		

scotchApp.run(function($rootScope,$http,companyDetailsServices) {
    	$rootScope.rooturl = 'http://localhost/accounting/#';
    	$rootScope.init = function() { 
    		
		    companyDetailsServices.getCompanyDetails().success(function(response) {
		 		$rootScope.company=response.companyDetails.company_name;
		 		$rootScope.company_logo=response.companyDetails.company_logo;
		 		$rootScope.company_adress=response.companyDetails.company_adress;
	    	});
		}   
	    $rootScope.init();
});
scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'app/templates/login/home.html',
				controller  : 'loginController'				
			})

			// route for the about page
			.when('/register', {
				templateUrl : 'app/templates/login/register.html',
				controller  : 'loginController'	
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});
