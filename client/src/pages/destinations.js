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
import { useEffect } from "react";

// API call setup
import locationdetailsAPI from '../utils/locationdetailsAPI';

function DestinationPage() {
  useEffect(() => {
    locationdetailsAPI.locationDetails().then((response) => {
      console.log(response.data);
    });
  });

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
