var app = new Vue( {
  el: '#root',
  data: {

    query : '',
},
  methods : {

      searchMovies()  {
          axios.get('https://api.themoviedb.org/3/search/movie', {
              params : {

                apiKey : 'a837f0e3cc53c9e644cd012f87fc7331',
                query : this.query ,
              }

        })
        .then(response => {
              console.log(response);

        })




    },
},
  mounted () {








    }
})
