/*
* @Author: senon
* @Date:   2016-12-01 11:21:10
* @Last Modified by:   senon
* @Last Modified time: 2016-12-03 17:20:48
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


	/*function($scope,$http,httpService){
		$http.get('/app/datas/in_theaters.json').then(function(source){
			if(source.status == 200){
				$scope.subjects = source.data.subjects;
			}else{
				$scope.message = "获取对象错误："+ source.statusText;
			}

		}, function(err){
			$scope.message = "获取对象错误："+err.statusText;
		});*/

})(angular)
