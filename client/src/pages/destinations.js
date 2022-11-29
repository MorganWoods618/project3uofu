import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  ChakraProvider,
  Image,
  Button
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import SearchBar from '../components/layout/SearchBar';
// API call setup
import locationdetailsAPI from '../utils/locationdetailsAPI';

function DestinationPage() {
  useEffect(() => {
    locationdetailsAPI.locationDetails().then((response) => {
      console.log(response.data.address);
    });
  });
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
      // console.log(searchInput)
      try{
        const response = await locationdetailsAPI.locationDetails(searchInput)
        API.destinations(response.xid).then(data=>{
          // const cityReturn= data.data.features
          // const searchData= cityReturn.map(city=>(
          //   {
          //   //need to pull XID
          //   xidNumber: cityReturn.data
          // }
          // ))
  
          //pulling all XIDs in an array
          // const xidArray = []
          data.address.forEach(feature => {
            locationdetailsAPI.push(feature.city)
          });
          console.log(locationdetailsAPI)
        })
      }catch(err){
        console.log(err)
      }

      }
  return (
    <ChakraProvider>
      <Heading size="2xl" align="center">
        Destinations
      </Heading>
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack>
            <Image
              src={
                "#"
              }
              layout={"fill"}
            />
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >Location Name</Heading>
            <Text color={"gray.500"}>
            Street
            City
            State
            Country
            Zip
            </Text>
            <Text color={"gray.500"}>
            Description
            </Text>
            <Button type="submit" size="sm">Add to Favorites</Button>
          </Stack>
        </Box>
      </Center>
    </ChakraProvider>
  );
}


export default DestinationPage;
