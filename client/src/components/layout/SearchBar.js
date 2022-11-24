import {
  Center,
  VStack,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  ChakraProvider,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";

function SearchBar() {
  return (
    <ChakraProvider>
      <Center bg="grey" padding={4}>
        <HStack>
          <Input
            placeholder="Where do you want to go?"
            size="sm"
            align="center"
            bg="white"
          />
          <Button size="sm">Search</Button>
        </HStack>
      </Center>
    </ChakraProvider>
  );
}

export default SearchBar;
