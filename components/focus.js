( function(angular){
	//指令命名驼峰命名法，使用时采用auto-focus;
	angular.module('moviecat.focus', []).
	directive('autoFocus', [
		'$location',
		function($location){
			var path = $location.path();
			return {
				restrict:'A',
				link: function($scope,iElm,iAttrs,controller){ //这几个变量位置不能动
					$scope.$location = $location;
					$scope.$watch('$location.path()', function(now){
						var aLink = iElm.children().attr('href');
					/*console.log(aLink);#/*/
					/*console.log(path);/*/
						var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
						if(now.startsWith(type)){
							iElm.parent().children().removeClass('active');
							iElm.addClass('active');
						}
					})
				}
			}
	}])
})(angular);
