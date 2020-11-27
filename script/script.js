const base_url = 'https://api.themoviedb.org/3/search/movie';
const api_key = 'a837f0e3cc53c9e644cd012f87fc7331';
const posterBaseURL = 'https://image.tmdb.org/t/p/' ;
const posterWidth = 'w185' ;
const noPosterIMG = 'img/no_image.jpg' ;

var app = new Vue( {
  el: '#root',
  data: {

    query : '',
    researchResults : [],

},
  methods : {

      searchMovies()  {
          axios.get('https://api.themoviedb.org/3/search/movie', {
              params : {

                api_key : 'a837f0e3cc53c9e644cd012f87fc7331',
                query : this.query
              }
        } )
        .then((results) => {

              this.researchResults = this.researchResults.concat(results.data.results) ;
              console.log(this.researchResults);

        });
        axios.get('https://api.themoviedb.org/3/search/tv', {
            params : {

              api_key : 'a837f0e3cc53c9e644cd012f87fc7331',
              query : this.query
            }

      } )
      .then((results) => {

            this.researchResults = this.researchResults.concat(results.data.results) ;
            // console.log(results.data.results);
            console.log(results);
            console.log(this.researchResults);

      });
  },

        voteCalculation (vote) {
            return Math.floor(vote.vote_average/2);
        },
    getPosterURL (poster_path) {

        if (poster_path) {
                return posterBaseURL + posterWidth + poster_path ;
        }
        else {
            return noPosterIMG ;
        }

    }

},
  mounted () {








    }
})
