

angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {

      this.selectVideo = (video) => {  
        this.currentVideo = video;
      };

      this.searchResults = (videoData) => {          
        this.videos = videoData;
        this.currentVideo = videoData[0];
      };
      
      

      youTube.search('hello world', this.searchResults);
    },
    templateUrl: 'src/templates/app.html'
  });
