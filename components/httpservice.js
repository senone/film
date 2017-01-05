( function(angular){


	angular.module('moviecat.http', []).
	service('httpService', ['$window','$document', function($window,$document){
		//http://api.douban.com/v2/movie/in_theaters
		this.jsonp =  function(url,data,callback){ //没有data数据传入{}
			var cName = 'service'+ Math.random().toString().replace('.','');
			$window[cName] =  function(data){
				callback(data);
				$document[0].body.removeChild(script);
			};//关键回调函数执行
			var search = url.indexOf('?') == -1 ? '?' : '&';
			for(var key in data){
				search += key + "=" + data[key] + "&";
			}

			search += "callback=" + cName;
			var script = $document[0].createElement('script');
			script.src = url + search;
			$document[0].body.appendChild(script);
		}
	}])

})(angular)















