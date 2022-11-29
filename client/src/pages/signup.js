import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  ChakraProvider,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { useState } from "react";
import Auth from "../utils/auth";

export default function SignupPage() {
  const [addUser, { error }] = useMutation(ADD_USER);
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  console.log(userFormData);
  return (
    <ChakraProvider>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <form onSubmit={handleFormSubmit}>
              <Heading fontSize={"2xl"}>Sign up</Heading>
              <FormControl id="name">
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  onChange={handleInputChange}
                  value={userFormData.username}
                  type="name"
                />
              </FormControl>
              <FormControl id="username">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  type="password"
                />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button colorScheme={"red"} variant={"solid"} type="submit">
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
          />
        </Flex>
      </Stack>
    </ChakraProvider>
  );
}
