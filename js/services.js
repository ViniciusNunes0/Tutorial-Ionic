angular.module('app.services', [])


.service('Survey', ['$q','$http',function($q,$http){

  var api_url = 'https://sheetsu.com/apis/v1.0/1bca641c2b98';
  var ret={
    all:function(){
      var deferred = $q.defer();

      $http.get(api_url).then(function(resp){
        console.log(resp);
      });

      return deferred.promise;
    }
  }

  return ret;

}]);
