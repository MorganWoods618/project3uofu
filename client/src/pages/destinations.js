// import {
//   Editable,
//   EditableInput,
//   EditableTextarea,
//   EditablePreview,
//   Center,
//   Text,
//   Heading,
//   VStack,
//   Button,
//   Input,
//   HStack,
//   SimpleGrid,
//   Image,
//   Badge,
//   UseToast,
//   ChakraProvider,
// } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import { useMutation } from '@apollo/client';
// import { LOCATION_SEARCH } from "../utils/mutations";
// import {getSavedLocationIds, saved_location, saveLocationId} from "../utils/localStorage";

// // API call setup
// import API from "../utils/API"
// import locationAPI from "../utils/localStorage";

// const SearchLocation = () => {
//   // create state for holding returned google api data
//   const [searchedLocations, setSearchedLocations] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');
//   // create state to hold saved bookId values
//   const [savedLocationIds, setSavedLocationIds] = useState(getSavedLocationIds());
//   const [saveLocation, { error }] = useMutation(LOCATION_SEARCH);
//   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   useEffect(() => {
//     return () => saveLocationIds(savedLocationIds);
//   });
//   // create method to search for books and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!searchInput) {
//       return false;
//     }
//     try {
//       const response = await fetch(
//         `https://opentripmap-places-v1.p.rapidapi.com/%7Blang%7D/places/${searchInput}`
//       );
//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }
//       const { items } = await response.json();
//       const locationData = items.map((location) => ({
//         name: location.name,
//         longitude: location.lon || ['No author to display'],
//         latitude: location.latitude,
//         population: location.population
//       }));
//       setSearchedLocations(locationData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   // create function to handle saving a book to our database
//   // const handleSaveLocation = async (locationId) => {
//   //   // find the book in `searchedBooks` state by the matching id
//   //   const locationToSave = searchedLocations.find((location) => location.locationId === locationId);
//   //   // get token
//   //   const token = Auth.loggedIn() ? Auth.getToken() : null;
//   //   if (!token) {
//   //     return false;
//   //   }
//   //   try {
//   //     const { data } = await saveBook({
//   //       variables: { locationData: { ...bookToSave } },
//   //     });
//   //     console.log(savedBookIds);
//   //     setSavedBookIds([...savedBookIds, bookToSave.bookId]);
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };
// //   return (
// //   <>
// //       <Jumbotron fluid className="text-light bg-dark">
// //         <Container>
// //           <h1>Search for Books!</h1>
// //           <Form onSubmit={handleFormSubmit}>
// //             <Form.Row>
// //               <Col xs={12} md={8}>
// //                 <Form.Control
// //                   name="searchInput"
// //                   value={searchInput}
// //                   onChange={(e) => setSearchInput(e.target.value)}
// //                   type="text"
// //                   size="lg"
// //                   placeholder="Search for a book"
// //                 />
// //               </Col>
// //               <Col xs={12} md={4}>
// //                 <Button type="submit" variant="success" size="lg">
// //                   Submit Search
// //                 </Button>
// //               </Col>
// //             </Form.Row>
// //           </Form>
// //         </Container>
// //       </Jumbotron>
// //       <Container>
// //         <h2>
// //           {searchedBooks.length
// //             ? `Viewing ${searchedBooks.length} results:`
// //             : 'Search for a book to begin'}
// //         </h2>
// //         <CardColumns>
// //           {searchedBooks.map((book) => {
// //             return (
// //               <Card key={book.bookId} border="dark">
// //                 {book.image ? (
// //                   <Card.Img
// //                     src={book.image}
// //                     alt={`The cover for ${book.title}`}
// //                     variant="top"
// //                   />
// //                 ) : null}
// //                 <Card.Body>
// //                   <Card.Title>{book.title}</Card.Title>
// //                   <p className="small">Authors: {book.authors}</p>
// //                   <Card.Text>{book.description}</Card.Text>
// //                   {Auth.loggedIn() && (
// //                     <Button
// //                       disabled={savedBookIds?.some(
// //                         (savedId) => savedId === book.bookId
// //                       )}
// //                       className="btn-block btn-info"
// //                       onClick={() => handleSaveBook(book.bookId)}
// //                     >
// //                       {savedBookIds?.some((savedId) => savedId === book.bookId)
// //                         ? 'Book Already Saved!'
// //                         : 'Save This Book!'}
// //                     </Button>
// //                   )}
// //                 </Card.Body>
// //               </Card>
// //             );
// //           })}
// //         </CardColumns>
// //       </Container>
// //     </>
// //   );
// // };
// // </ChakraProvider>
// //   );
// // };

//   return (
//     <ChakraProvider>
//       <Center py={6}>
//       <Box>
//         <Heading>Search for Books!</Heading>
//         <Form onSubmit={handleFormSubmit}>
//           <Form.Row>
//             <Col xs={12} md={8}>
//               <Form.Control
//                 name="searchInput"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 type="text"
//                 size="lg"
//                 placeholder="Search for a book"
//               />
//             </Col>
//             <Col xs={12} md={4}>
//               <Button type="submit" variant="success" size="lg">
//                 Submit Search
//               </Button>
//             </Col>
//           </Form.Row>
//         </Form>
//       </Box>
//     <Box>
//       <h2>
//         {searchedBooks.length
//           ? `Viewing ${searchedBooks.length} results:`
//           : 'Search for a book to begin'}
//       </h2>
//       <CardColumns>
//         {searchedBooks.map((book) => {
//           return (
//             <Card key={book.bookId} border="dark">
//               {book.image ? (
//                 <Card.Img
//                   src={book.image}
//                   alt={`The cover for ${book.title}`}
//                   variant="top"
//                 />
//               ) : null}
//               <Card.Body>
//                 <Card.Title>{book.title}</Card.Title>
//                 <p className="small">Authors: {book.authors}</p>
//                 <Card.Text>{book.description}</Card.Text>
//                 {Auth.loggedIn() && (
//                   <Button
//                     disabled={savedBookIds?.some(
//                       (savedId) => savedId === book.bookId
//                     )}
//                     className="btn-block btn-info"
//                     onClick={() => handleSaveBook(book.bookId)}
//                   >
//                     {savedBookIds?.some((savedId) => savedId === book.bookId)
//                       ? 'Book Already Saved!'
//                       : 'Save This Book!'}
//                   </Button>
//                 )}
//               </Card.Body>
//             </Card>
//           );
//         })}
//       </CardColumns>
//     </Box>
// </Center>
// </ChakraProvider>
//   );
// };
// export default SearchLocation

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

// export default DestinationPage
//     <ChakraProvider>
// <VStack spacing={7} paddingTop={5}>
// <Heading size='xl' >Destinations</Heading>
// <Input placeholder='Where do you want to go?' size='lg' align='center' />

// </VStack>
// </ChakraProvider>
//   );
// }
export default DestinationPage;
