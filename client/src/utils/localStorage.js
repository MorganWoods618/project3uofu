export const getSavedLocationIds = () => {
   const savedLocationIds = localStorage.getItem('saved_location')
     ? JSON.parse(localStorage.getItem('saved_location'))
     : [];
 
   return savedLocationIds;
 };
 
 export const saveLocationId = (locationIdArr) => {
   if (locationIdArr.length) {
     localStorage.setItem('saved_location', JSON.stringify(locationIdArr));
   } else {
     localStorage.removeItem('saved_location');
   }
 };
 
 export const removeLocationId = (locationId) => {
   const savedLocationIds = localStorage.getItem('saved_location')
     ? JSON.parse(localStorage.getItem('saved_location'))
     : null;
 
   if (!savedLocationIds) {
     return false;
   }
 
   const updatedSavedLocationIds = savedLocationIds?.filter((savedlocationId) => savedlocationId !== locationId);
   localStorage.setItem('saved_location', JSON.stringify(updatedSavedLocationIds));
 
   return true;
 };
 