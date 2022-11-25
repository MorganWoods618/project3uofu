import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Center,
  Text,
  Heading,
  VStack,
  Button,
  Input,
  HStack,
  SimpleGrid,
  Image,
  Badge,
  UseToast,
  ChakraProvider,
  Box,
  FormControl,
  useControllableProp,
  useControllableState,
} from "@chakra-ui/react";
import { useEffect } from "react";

// API call setup
import API from "../utils/API";

function DestinationPage() {
  useEffect(() => {
    API.destinations().then((response) => {
      console.log(response.data);
    });
  });

  return (
    <ChakraProvider>
      <Center py={6}>
        <Heading>Find Somewhere To Go!</Heading>
      </Center>
      <Center>
        <Box
          maxW={"445px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        ></Box>
      </Center>
    </ChakraProvider>
  );
}


export default DestinationPage;
