/*
* @Author: senon
* @Date:   2016-12-03 15:40:00
* @Last Modified by:   senon
* @Last Modified time: 2016-12-03 17:20:11
*/

'use strict';

( function(angular){

angular.module('moviecat.move_detail', ['ngRoute','moviecat.http'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/detail/:id',{
		templateUrl:'movie_detail/view.html',
			controller:'moviedetailController'
	});
}]).controller('moviedetailController', [
		'$scope',
		'$routeParams',
		'httpService',
		'App',
		function($scope,$routeParams,httpService,App){
			$scope.loading = true;
		httpService.jsonp(App.detailApi+$routeParams.id,
		{},
		 function(data){
		 	console.log(data.title);
		 	$scope.detail = data;
		 	$scope.loading = false;
		 	$scope.$apply();
		});
	}])
})(angular);
