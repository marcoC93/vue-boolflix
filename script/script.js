var app = new Vue( {
  el: '#root',
  data: {


},
  methods : {

      axios.get('https://api.themoviedb.org/3/search/movie' ,  {
          params : {

            apiKey : 6eef0740d3ea72e3ca8701f8207cac60,
            query : '' ,
          }

      } )
  .then(response => {


  })




},

  mounted () {








    }
})
