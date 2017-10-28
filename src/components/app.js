angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {

      this.selectVideo = (video) => {  
        this.currentVideo = video;
      };
      
      this.searchResults = (query = 'hack reactor ALLEN dance') => {          
        youTube.search(query, (videoData) => {
          this.videos = videoData;
          this.currentVideo = videoData[0];
        });
      };
      
      this.searchResults();
    },
    templateUrl: 'src/templates/app.html'
  });
