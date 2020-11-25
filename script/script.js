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
              // console.log(results.data.results);

              this.researchResults = [...results.data.results] ;
              // console.log(this.researchResults);
              // console.log(results.data.results[2].vote_average);


        });
    },
        voteCalculation (vote) {
            return Math.floor(vote.vote_average/2);
        }

},
  mounted () {








    }
})
