import {
  ChakraProvider,
  VStack,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import DashCalendar from "./Calendar";

function DashboardPage() {
  return (
    <ChakraProvider>
      <VStack spacing={7} paddingTop={5}>
        <Tabs isFitted variant="enclosed">
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
      </VStack>
    </ChakraProvider>
  );
}

export default DashboardPage;
