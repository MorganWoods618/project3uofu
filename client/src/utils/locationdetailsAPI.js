import axios from "axios";

export default {
   
  
   // Authentication methods
   // ===============================================

   locationDetails: function(xid) {


   // To get location details
      const options = {
         method: 'GET',
         url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/' + `${xid}`,
         headers: {
           'X-RapidAPI-Key': '2b2d262296msh6a27b9e5fb577fap172651jsn21e262119317',
           'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
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


