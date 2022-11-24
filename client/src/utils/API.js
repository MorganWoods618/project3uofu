import axios from "axios";

export default {
   
  
   // Authentication methods
   // ===============================================

   destinations: function() {
      const options = {
         method: 'GET',
         url: 'https://api.opentripmap.com/0.1/en/places/',
         params: {query: 'paris', searchby: 'city'},
         headers: {
            'X-RapidAPI-Key': '5ae2e3f221c38a28845f05b63a5ba8d1e3432752bdf540933f8abbd3 ',
            'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
         }
       };
       
       return axios.request(options);

       console.log(response.data);

    
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