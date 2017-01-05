/*
* @Author: senon
* @Date:   2016-12-01 11:21:10
* @Last Modified by:   senon
* @Last Modified time: 2017-01-05 23:26:00
*/

'use strict';
( function(angular){

	angular.module('moviecat.move_list', ['ngRoute','moviecat.http']).
	config(['$routeProvider',function($routeProvider) {
		$routeProvider.
		when('/:categroy/:page',{
			templateUrl:'movie_list/view.html',
			controller:'movielistController'
		});
	}]).controller('movielistController', [
	'$scope',
	'$routeParams',
	'$route',
	'httpService',
	'App',
	 function($scope,$routeParams,$route,httpService,App){
	 		var num= App.pageCount;
	 		var page = parseInt($routeParams.page);
	 		var start = (page -1)*num;
	 		$scope.loading = true;
	 		$scope.count = 0;
	 		$scope.title = 'loading...';
	 		$scope.page = page;
	 	httpService.jsonp(App.listApi+ $routeParams.categroy,//关键
	 		{start:start,count:num,q:$routeParams.q},
	 		function(data){

	 		$scope.title = data.title;
	 		$scope.total = data.total;
	 		$scope.pageNum = Math.ceil($scope.total/num);
	 		$scope.subjects = data.subjects;
	 		$scope.loading = false;
	 		$scope.$apply();//一次性提交数据
	 	});

	 	$scope.goPage =  function(n){
	 		if(n>=1&&n<=$scope.pageNum){
	 			$route.updateParams({page:n});
	 		}
	 	};


}]);

})(angular)
