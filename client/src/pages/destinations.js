import {
  Center,
  ChakraProvider,
  HStack,
  Input,
  Button,
  Box,
  Heading,
  Stack,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

// API call setup
import locationAPI from '../utils/locationAPI'
import API from "../utils/API";
import locationdetailsAPI from "../utils/locationdetailsAPI";

function DestinationPage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchedLocation, setSearchLocation] = useState([]);
  const handleInputChange = (event) => setSearchInput(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await locationAPI.locations(searchInput);
      API.destinations(response.data.lat, response.data.lon).then((data) => {
        //pulling all XIDs in an array
        const xidArray = [];
        data.data.features.forEach((feature) => {
          xidArray.push(feature.properties.xid);
        });
        // console.log(xidArray)
        let testerA = [];
        for (let i = 0; i < xidArray.length; i++) {
          let xidIndex = xidArray[i];
          // console.log(xidIndex)
          locationdetailsAPI.locationDetails(xidIndex).then((data) => {
            // console.log(data)
            testerA.push(data);
            // console.log(testerA)
            // testerA.map(location=>{
            //   let locationArray=[]
            //   locationArray.push(location)
            //   console.log(locationArray)
            // })
            setSearchLocation(testerA);
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(searchedLocation)

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <Center bg="grey" padding={4}>
          <HStack>
            <Input
              placeholder="Where do you want to go?"
              size="sm"
              align="center"
              bg="white"
              rounded="md"
              name="searchInput"
              value={searchInput}
              onChange={handleInputChange}
            />
            <Button type="submit" size="sm">
              Search
            </Button>
          </HStack>
        </Center>
        <Heading size="2xl" align="center">
          Destinations
        </Heading>
      </form>
      {searchedLocation.map((location) => {
        console.log(location);
        return (
          <div>
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
                  {/* cannot pull image, doesn't show on all of them */}
                  {/* <Image src={location.data.preview.source} layout={"fill"} /> */}
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    {location.data.name}
                  </Heading>
                  <Text color={"gray.500"} fontSize={"sm"} as="b">
                    {location.data.address.house_number}
                    {location.data.address.road}
                  </Text>
                  <Text color={"gray.500"} fontSize={"sm"} as="b">
                    {location.data.address.city}
                  </Text>
                  <Text color={"gray.500"} fontSize={"sm"} as="b">
                    {location.data.address.state}
                  </Text>
                  <Text color={"gray.500"} fontSize={"sm"} as="b">
                    {location.data.address.country}
                  </Text>
                  <Text color={"gray.500"} fontSize={"sm"} as="b">
                    {location.data.address.postcode}
                  </Text>
                  <Link href={location.data.otm} color={"gray.500"} fontSize={"sm"}>
                    See more in Open Trip Maps
                  </Link>
                  <Button type="submit" size="sm">
                    Add to Favorites
                  </Button>
                </Stack>
              </Box>
            </Center>
          </div>
        );
      })}
    </ChakraProvider>
  );
}

export default DestinationPage