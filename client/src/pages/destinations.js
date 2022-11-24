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
} from "@chakra-ui/react";
import { useEffect } from "react";

// API call setup
import API from "../utils/API"
function DestinationPage() {
    useEffect(()=>{
      API.destinations().then((response)=> {
        console.log(response.data)
      }  
    )})

  return (
    <ChakraProvider>
<VStack spacing={7} paddingTop={5}>
<Heading size='xl' >Destinations</Heading>
<Input placeholder='Where do you want to go?' size='lg' />

</VStack>
</ChakraProvider>
  );
}
export default DestinationPage