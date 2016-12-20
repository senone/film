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














/*(function(angular) {
  // 由于默认angular提供的异步请求对象不支持自定义回调函数名
  // angular随机分配的回调函数名称不被豆瓣支持
  var http = angular.module('moviecat.services.http', []);
  http.service('HttpService', ['$window', '$document', function($window, $document) {
    // url : http://api.douban.com/vsdfsdf -> <script> -> html就可自动执行
    this.jsonp = function(url, data, callback) {
      var fnSuffix = Math.random().toString().replace('.', '');
      var cbFuncName = 'my_json_cb_' + fnSuffix;
      // 不推荐
      $window[cbFuncName] = callback;
      var querystring = url.indexOf('?') == -1 ? '?' : '&';
      for (var key in data) {
        querystring += key + '=' + data[key] + '&';
      }
      querystring += 'callback=' + cbFuncName;
      var scriptElement = $document[0].createElement('script');
      scriptElement.src = url + querystring;
      $document[0].body.appendChild(scriptElement);
    };
  }]);
})(angular);
*/
