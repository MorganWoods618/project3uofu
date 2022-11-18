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
  Container,
  Stack,
} from "@chakra-ui/react";

function LoginPage() {
  return (
    <ChakraProvider>
  <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
  <Stack spacing="8">
    
</Stack>
  </Container>
    </ChakraProvider>


//     <ChakraProvider>
//          <VStack spacing={7} paddingTop={5}>
//         <Heading>Log In</Heading>
// <Editable defaultValue='Username'>
//   <EditablePreview />
//   <EditableInput />
// </Editable>
// <Editable defaultValue='Password'>
//   <EditablePreview />
//   <EditableInput />
// </Editable>
// </VStack>
//     </ChakraProvider>
  );
}

export default LoginPage;
