angular.module('video-player')
  .component('videoList', {
  // TODO
    controller: function() {
   
    },
    bindings: {
      videos: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
