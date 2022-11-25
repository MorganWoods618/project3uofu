import axios from "axios";

export default {
   
  
   // Authentication methods
   // ===============================================

   destinations: function() {
      const options = {
         method: 'GET',
         url: 'https://andruxnet-world-cities-v1.p.rapidapi.com/',
         params: {query: 'paris', searchby: 'city'},
         headers: {
           'X-RapidAPI-Key': 'bcee7348afmshb2a2bb64c60a5ebp11f6bbjsn4d7b7ce455d6',
           'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com'
         }
       };
       
       return axios.request(options);
    
   },
   

   Dashboard: function(id){
      return axios.post("/api/dashboard");
   },

   getDestinations: function() {
      return axios.get("./api/destinations");
   },
   getOneTrip: function(id){
      return axios.get("/api/pasttrips");
   },
   saveTrip: function (trip){
      console.log(trip)
      return axios.post("/api/login");
   },
   update: function (id, trip){
      return axios.post("/api/aboutus}");
   },

   getUser: function () {
      return axios.get("/api/signup");
   }
}