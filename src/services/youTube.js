angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
  
    this.search = (query) => {
      $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyB36XgCWiWOMw65FDn-mjJcj8RcXwYERwM`
      }).then(function success(data) {
        console.log(data.data.items);
        
      }, function error(data) {
        console.log(data);
      });
    };

  });
