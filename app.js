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


// .controller('NavController', [
//   '$scope',
//   '$location',
//   function($scope, $location) {
//     $scope.$location = $location;
//     $scope.$watch('$location.path()', function(now) {
//       if (now.startsWith('/in_theaters')) {
//         $scope.type = 'in_theaters';
//       } else if (now.startsWith('/coming_soon')) {
//         $scope.type = 'coming_soon';
//       } else if (now.startsWith('/top250')) {
//         $scope.type = 'top250';
//       }
//       console.log($scope.type);
//     });
//   }
// ])
