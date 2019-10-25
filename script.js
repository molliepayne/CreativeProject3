/*global moment*/
/*global Vue*/
/*global VueStarRating*/
Vue.component('star-rating', VueStarRating.default);

let app = new Vue({
  el: '#app',
  data: {
    //userID and access token for Instagram API
    userID: '16597939728',
    accessToken: '16597939728.1677ed0.3f7231da4a16483ea64cf829725edc5d', 
    //API Keys for Ambiant weather
    apiKey: '33cce24bfeb34c169fe0bb3afc0cbba5f649b08c6e5f44cfb4a779292f103eed',
    aplicationKey: 'fb7c164caf2847f886d8980050f410d464b94826691e43b795c60b2a0a7ad176',
    instagrams: [],
    weather: [],
    loading: true,
    loadingWeather: true,
    show: 'all',
    
  },
  created() {
     this.ambiantWeather();
   this.instagram();
  
  },
  computed: {
  
    filteredInstas() {
      console.log(this.instagrams);
      if (this.show === 'withComments')
        return this.instagrams.filter(item => {
          console.log(item.comments.count);
         return item.comments.count!== 0;
        });
      if (this.show === 'onFarm')
        return this.instagrams.filter(item => {
          if(item.location!=null)
          {
            console.log("location: '" + item.location.name+"'");
            return item.location.name==='Provo, Utah';
          }
         });
      if (this.show === 'multipleImages')
        return this.instagrams.filter(item => {
          
          if(item.carousel_media!=null)
          {
            console.log("item: " + item.carousel_media);
            console.log(item.carousel_media.length);
            return item.carousel_media.length!==0;
          }
         });
         if (this.show === 'mostLiked')
          return this.instagrams.filter(item => {
          
          if(item.likes.count >20)
          {
            console.log("item: " + item.likes.count);
            
            return item.likes.count!==0;
          }
         });
      return this.instagrams;
    },
  
  },
  
 
  watch: {
   
  },
  methods: {
   postDate: function(date) {
      
         
          return moment(date).format('MMMM Do YYYY');
    },
    postDateMin: function(date) {
      
         
          return moment(date).format('MMMM Do YYYY h:mm A');
    },
    instagram() {
      console.log("in instagram");
      axios.get('https://api.instagram.com/v1/users/' + this.userID + '/media/recent?access_token=' + this.accessToken )
        .then(response => {
          this.loading = true;
          this.instagrams = response.data.data;
          console.log(this.instagrams);
          this.loading = false;
          return true;
        })
        .catch(error => {
          console.log(error)
        });
    },
    
    ambiantWeather() {
      console.log("in ambiant weather");
     
      axios.get('https://api.ambientweather.net/v1/devices?apiKey=' + this.apiKey + '&applicationKey=' + this.aplicationKey )
        .then(response => {
          console.log("loading weather");
          this.loadingWeather = true;
          this.weather = response.data;
          console.log(this.weather);
          this.loadingWeather = false;
          console.log("done in abient weather");
          return true;

        })
        .catch(error => {
          console.log(error)
        });
    },
    
   mostLiked() {
    console.log("in top 10");  
    this.show='mostLiked';
    },
    
    onTheFarm(){
      console.log("on the farm"); 
       this.show='onFarm';
    },
    withComments(){
      console.log("with comments");
      this.show='withComments';
    },
    multipleImages(){
      console.log("multipleImages");
      this.show='multipleImages';
    },
    viewAll(){
      console.log("viewAll");
      this.show='all';
    }
    
    
  }
});

