import { Link } from "react-router-dom";
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
  Button
} from "@chakra-ui/react";
import SearchBar from "./SearchBar";

// import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <ChakraProvider>
      <Center bg="black" padding={6}>
        <VStack spacing={7}>
          <Tabs variant="soft-rounded" colorScheme="red">
            <Center>
              <TabList>
                <Tab>
                    <Link to="/">Dashboard</Link>
                </Tab>
                <Tab>
                <Link to="/aboutus">About Us</Link>
                </Tab>
                <Tab>
                <Link to="/destinations">Destinations</Link>
                </Tab>
                <Tab>
                <Link to="/pasttrips">Past Trips</Link>
                </Tab>
                <Tab>
                <Link to="/login">Log In</Link>
                </Tab>
                <Tab>
                  <Link to="/signup">Sign Up</Link>
                </Tab>
              </TabList>
            </Center>
          </Tabs>
        </VStack>
      </Center>
      <SearchBar/>
    </ChakraProvider>
  );
}

export default MainNavigation;