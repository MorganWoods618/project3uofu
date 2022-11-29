import {
  Center,
  ChakraProvider,
  HStack,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

// API call setup
import locationAPI from "../../utils/locationAPI";
import API from "../../utils/API";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("")
  const [searchedLocation, setSearchLocation] = useState([])

  // checking locationdetailsapi works
  // useEffect(() => {
  //   locationdetailsAPI.locations("London").then((response) => {
  //     console.log(response.data);
  //   });
  // });

  const handleInputChange = (event) => setSearchInput(event.target.value)
  const handleSubmit = async(event)=>{
    event.preventDefault()
    console.log(searchInput)
    try{
      const response = await locationAPI.locations(searchInput)
      console.log(response.data.lat)
      API.destinations(response.data.lat, response.data.lon).then(data=>{
        // const cityReturn= data.data.features
        // const searchData= cityReturn.map(city=>(
        //   {
        //   //need to pull XID
        //   xidNumber: cityReturn.data
        // }
        // ))

        //pulling all XIDs in an array
        const xidArray = []
        data.data.features.forEach(feature => {
          xidArray.push(feature.properties.xid)
        });
        console.log(xidArray)
      })
    }catch(err){
      console.log(err)
    }
  }
  
  return(
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
      <Center bg="grey" padding={4}>
        <HStack>
          <Input
            placeholder="Where do you want to go?"
            size="sm"
            align="center"
            bg="white"
            rounded='md'
            name="searchInput"
            value={searchInput}
            onChange= {handleInputChange}
          />
          <Button type="submit" size="sm">Search</Button>
        </HStack>
      </Center>
      </form>
    </ChakraProvider>
  );
}

export default SearchBar;
