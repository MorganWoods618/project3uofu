import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  ChakraProvider,
  Image
} from '@chakra-ui/react';
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
      <Heading size="2xl" align="center">
        About Us
      </Heading>
      <Center py={6}>
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
                "https://lh3.googleusercontent.com/pw/AL9nZEVzm111tA91CXUDBvexaU4K3LDeG_7y8TEuEwRe9qVIOxvrWcjx3edQ3s9kyjE-QVSPKw-fnGdsu75TieDp8_xqhA5Z2jmDDQ4zwu-LFufVXxNJJlvUF7nukxScRiYhFqjSzR4Zs2u9WZghNcostcAHx8jVoxrbgHQYQhvtfMrmex0rV1umkpAPQiy8KvTQSVKJ3YE0t8ICAdkpBsDe-AEoSNK1q_IaLyMx-rbjc7PYBuuGELMTKDu-BpQ5ed8xfQaaAL28TVf07fdo4l5KA8QVuwDX8X-skUSgCOJtBQ_ypGFEY5re3utv-6D0fV9ou0wHM50neRQZZlehJFABd2d24yFMYMwWMjDxCeE_sBSirR57JdRPGUoae7x9acXLs5IxpP83vkb4DJgSr7giHTdKlDwus0vkS3S13iMg0pPHjkbAtPbnLa4CBwhEg7l5dFMWIx0Hfh11gG4yhIbuHz-L4u4saBeAazStcm_vnuoWpPoWkh9eeR5IPyam7m2YUh_F6cje2RcUxM_7vuQwfuOyS8HSvdEu9W0mfMgQ0JcCcv6WTfCbw7387JsfgtjrEfU5-Ox3u9ZT8hEKN9ES-piFHBraFDsT34DjDmCwJWsZFJZOnALxj1VR9zBAEc_w3gBKO5oENLHdSMNb3LWvxslRQLeVorL8Vmja3MiqlsXJUejIOQaZNbWQmO52tQaJZ0tInTDE2n8UrTcpJ3HQMtFBHMCElYYBSyfQW6tpGs_i4-YReUtAbHJPcMUr0GrgKUhClPtrDnDutXbNeVcpewPYbcV-xR_XHseryTAe6ZcqO_Hp9zgedpCbFjdP3W9LsBMWElBBSbjc3rARTs2HPAxTGWV3RG3CPNuPVT-n1Pt-ozJiTRW0Nv6aoK_Vr4sd3MdlCOvZWXnrJTzuAWIusGh-36lK5sJ7wqiVoPVnGaJH--rEJLsOa5IdjJINZgiqX1SX9FjLTvz0iUR8O-3gyCWb_tKRuirn0DwrZnrgTqPsNrlYatFgup1Drku2jYLZwC6z9s_ZFvaJu6GN-R04T8WuRvHzsPJdN32M7Pno6AOZu_MvylrZGN7sDT8Wn0-bM0_0IjDy=w866-h965-no?authuser=0"
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
            >Destination Name            </Heading>
            <Text color={"gray.500"}>
            Description
            </Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar
              src={
                "https://lh3.googleusercontent.com/pw/AL9nZEWKrx-LsQH_i24QbiNODsI_987tozazym44Qr5kJ5FuWn_Ey_S17YUB9bGkcfUSL4yuLoDxKmgOlHibgC0LRa3bxnYiUXIa02H_CjHHz3BZ5RWbuyIK4K1u718v8xmFEjldSs9jBkFgQ7FS6oBK6_pCvHVQrer3w4ttXOtAcEGoTRSnpo8F1YjFGLebdSfURIluOMimcqaU9gI_eL_HArszhyWN48tWaz9Rgaz4Hls1XG4WirvcY5sk1MahaWsUhF5LrVRbKs2HABClye2BtJWun_amIS5Psyzq6kSNIiO6VYuVVPkfgvB8xkh1Ip7_56b0b_sy4EP-ot8MIMjmb9TiTzkE6OXg3VHXmpctr7IcWJq0CJwaOhxpuKxjp2gX4QuCB8lUXGQtqUy4LUlj4cZILORw1lwdqQjtq0HMTH0nT_eY0C6S1i0_XcerP28JbCBDxJXXFDu9onYSxYKQu_qq0ZAZFmdhZtwqFBnZlnDZ_nBU79kpVVG19bbJb18JtNa0xiNqpzTe8hN-a0YXIpXAepFhhfopZMaFXk1boYmcK3l-Hr3m54FQPWo3OaMD7WmANJhtxaj-t875ACvcv3HXp25gXMdXDoOxptKtYf7oJYSbykPGMASYQo9fHyPpG4ymNaMDqoC9DhFYwowo8fIedr_zLrkxuvIzVN5lrup5ImT1qvQxOJp1O57zGL4pbXoFwgpG534G-Psi5CdIg6hT0tupKjo2iEZLDJ7nh0vpyrf3hEOMzHnzJ0wFHV13W-5pTTF_WrJC9vIPLOXDYqpWRHZdCorJyOjpuz-DF0vt0YHSbsfRWqgwyujNOHlXQajamJCZBON32ngYciGsuIwCQQ00NLMk3p5IUDvpTrjIFmjNHxfeVYlYjjXyWYcvmYFaNb16Oc496k3NtGpbRhYmRdXVxdbugougNppKQ7sz_TMN0PpBXwOsrn3TJ_1wBNL9RHxR3wI2XdHd7Nt3bqRkKHOW1nFeOaDMYsmQu8VcdnOzh5ur09pxy6M1ykDuKqcb1Av0BqMFEqdZer_QWbbw0vl_rKGPz9q7hlA5tn2eksnRavyZb2lKROoWThy6m7Qn1jek=w365-h327-no?authuser=0"
              }
              alt={"Author"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>User</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </ChakraProvider>
  );
}


export default DestinationPage;
