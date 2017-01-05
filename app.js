'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.move_detail',
  'moviecat.focus',
  'moviecat.move_list'
]).
constant('App', {  //constant  共有属性提取
	pageCount:10,
	listApi:'//api.douban.com/v2/movie/',
	detailApi:'//api.douban.com/v2/movie/subject/'
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
}])
.controller('searchController', [
	'$route',
	'$scope',
	function($route,$scope){
	$scope.content = '';
	$scope.search =  function(){
		$route.updateParams({categroy:'search',q:$scope.content});
		//$route.updateParams()地址的数据更新
	}

}])
;
