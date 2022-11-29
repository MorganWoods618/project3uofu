import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  ChakraProvider,
  Image,
  VStack,
} from "@chakra-ui/react";

function AboutUsPage() {
  return (
    <ChakraProvider>
      <Heading size="2xl" align="center">
        About Us
      </Heading>
      <Center py={6}>
        <VStack>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Stack>
              <Image
                src={
                  "https://i.imgur.com/YBZi4jp.jpeg"
                }
                layout={"fill"}
              />
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              ></Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Costa Rica Manuel Antonio National Rain Forrest
              </Heading>
              <Text color={"gray.500"}>
                "I just love Costa Rica! Myself and a companion traveled there
                to the Pacific side and it was just amazing! The Beautiful
                Manuel Antonio National Rain Forrest was to die for. There were
                monkeys, sloths, rain Forrest black crabs, iguana's and other
                strange creatures. It was just breath taking! We also enjoyed
                the wonderful coffee, they have amazing coffee plantations. The
                food was delicious and so much yummy fruits! The local's are so
                warm and welcoming. There is some much outdoor activities to do
                there as well."
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  "https://i.imgur.com/2w07EDV.jpeg"
                }
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Cindy Chynoweth</Text>
              </Stack>
            </Stack>
          </Box>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Stack>
              <Image
                src={
                  "https://i.imgur.com/Tqyo0W1.jpeg"
                }
                layout={"fill"}
              />
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              ></Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Costa Rica Manuel Antonio National Rain Forrest
              </Heading>
              <Text color={"gray.500"}>
                "My travels to Utah had a very sweet spot for a hike. I traveled
                to a small town called Kanarravile, Utah. Kanarravile is know
                for their Kanarra Falls hike, it is breath taking as you hike
                closer to the waterfalls. It was a nice 78 degrees that day, the
                path starts dry with small pebbles. Then you walk further in
                stubble upon a small stream that slowly turns into a bigger
                river. Then you come up to a big opening of a the mountain. When
                you walk between these huge walls of mountains is astonishing.
                The build up continues as you approach the water falls, they
                come insight your body and spirit are wowed. "
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  "https://i.imgur.com/Tqyo0W1.jpeg"
                }
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Christain Lunaduenas</Text>
              </Stack>
            </Stack>
          </Box>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Stack>
              <Image
                src={
                  "https://images.unsplash.com/photo-1536625637853-ec02b2b4edbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                }
                layout={"fill"}
              />
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              ></Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Costa Rica Manuel Antonio National Rain Forrest
              </Heading>
              <Text color={"gray.500"}>
                "My trip to Puerto Rico was amazing. We went to Bahía
                Bioluminiscente which is a bioluminecent bay. The species of
                phytoplankton is so dense that when you're in the water at night
                and move around it looks like sparks coming off of your skin. It
                was truly one of the most beautiful things I have ever
                experienced. We went during a new moon so it was extra dark and
                you could see it even better than normal! There are only 5 in
                the whole world!"
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  "https://i.imgur.com/Jn24JKy.jpeg"
                }
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Morgan Woods</Text>
              </Stack>
            </Stack>
          </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default AboutUsPage;
