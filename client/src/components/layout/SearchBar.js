import {
  Center,
  ChakraProvider,
  HStack,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";


import { useEffect } from "react";

// API call setup
import locationAPI from "../../utils/locationAPI";

function SearchBar() {
  useEffect(() => {
    locationAPI.locations().then((response) => {
      console.log(response.data);
    });
  });
  return(
    <ChakraProvider>
      <Center bg="grey" padding={4}>
        <HStack>
          <Input
            placeholder="Where do you want to go?"
            size="sm"
            align="center"
            bg="white"
            rounded='md'
          />
          <Button size="sm">Search</Button>
        </HStack>
      </Center>
    </ChakraProvider>
  );
}

export default SearchBar;
