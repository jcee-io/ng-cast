angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      
      this.search = youTube.search;

      this.selectVideo = (video) => {  
        this.currentVideo = video;
      };
      
      
      this.searchResults = (query = 'cats') => {          
        youTube.search(query, (videoData) => {
          this.videos = videoData;
          this.currentVideo = videoData[0];
        });
       

      };
      
      
     
    //console.log(this.videos);
    },
    templateUrl: 'src/templates/app.html'
  });
