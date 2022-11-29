import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  ChakraProvider,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <ChakraProvider>
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row">
          //add logo here
            <Button
              rightIcon={<FaArrowRight />}
              colorScheme="teal"
              variant="outline">
                                <Link to="/contact">Contact Us</Link>
            </Button>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Group 10 Project 3
        </Text>
      </Stack>
    </Container>
  </ChakraProvider>
);

export default Footer;
