angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      
      
      youTube.search('cats');

      
      
      
      
      this.selectVideo = (video) => {  
        this.currentVideo = video;
      };
      
      
      this.searchResults = (video) => {  
      };
    //console.log(this.videos);
    },
    templateUrl: 'src/templates/app.html'
  });
