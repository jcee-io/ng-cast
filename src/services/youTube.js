angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
  
    this.search = (query, callback) => {
      var results;
      $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${YOUTUBE_API_KEY}`
      }).then(function success(data) {
        console.log('DATA: ', data.data.items);
        callback(data.data.items);
      }, function error(data) {
        console.log(data);
      });
    };

  });
