import {
  ChakraProvider,
  VStack,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Image,
  HStack,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import DashCalendar from "./Calendar";

function DashboardPage() {
  return (
    <ChakraProvider>
      <VStack
        spacing={7}
        paddingTop={5}
        backgroundImage="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Tabs
          isFitted
          variant="enclosed"
          backgroundColor="white"
          boxShadow={"2xl"}
          rounded={"md"}
        >
          <TabList>
            <Tab>Calendar</Tab>
            <Tab>Upcoming Trips</Tab>
            <Tab>Favorites</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DashCalendar />
            </TabPanel>
            <TabPanel>
              <p>Upcoming Trips</p>
            </TabPanel>
            <TabPanel>
              <p>Favorites</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Heading color="white">Our Top Locations to Visit!</Heading>
        <Text color="white">Cindy's Spots! </Text>
        <Text color="white">Locations: Costa Rica and Thailand </Text>
        <Text color="white">Luna's Spots! </Text>
        <Text color="white">Locations: Hawaii and Germany</Text>
        <Text color="white">Morgan's Spots! </Text>
        <Text color="white">Locations: Puerto Rico and Playa Del Carmen</Text>
        <Text></Text>
      </VStack>
    </ChakraProvider>
  );
}

export default DashboardPage;
