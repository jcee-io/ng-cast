angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
  
    this.search = (query, callback) => {
      var results;
      $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyB36XgCWiWOMw65FDn-mjJcj8RcXwYERwM`
      }).then(function success(data) {
        console.log('DATA: ', data.data.items);
        callback(data.data.items);
      }, function error(data) {
        console.log(data);
      });
      
      // return promise.then(function(data) {
      //   return data;
      // });
      console.log(results);
    };

  });
