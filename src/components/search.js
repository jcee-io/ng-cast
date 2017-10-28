angular.module('video-player')

  .component('search', {
  // TODO
    controller: function(youTube) {
      this.service = {
        search: youTube.search
      };
    },

    bindings: {
      result: '<',
    },
    templateUrl: 'src/templates/search.html'
  });


