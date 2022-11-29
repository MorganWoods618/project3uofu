import {
    ChakraProvider,
    Center,
    Text,
    Heading,
  } from "@chakra-ui/react";

import {useState} from 'react';
import Calendar from 'react-calendar'; 

function DashCalendar() {
 const [date, setDate] = useState(new Date())



 return (
    <ChakraProvider>
      <Heading>Travel Calendar</Heading>
      <Text>
        <Calendar onChange={setDate} value={date} selectRange={true}/>
      </Text>
      {date.length > 0 ? (
      <Center>
        <span>Start:</span>{' '} {date[0].toDateString()}
        &nbsp; to &nbsp;
        <span>End:</span> {date[1].toDateString()}
      </Center>
           ) : (
      <Center>
        <span>Default selected date:</span>{' '} {date.toDateString()}
      </Center>
           )}
    </ChakraProvider>
     );
   }

export default DashCalendar;