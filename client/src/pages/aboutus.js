import React from 'react';
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

function AboutUsPage() {
    return (
      <ChakraProvider>
        <Heading size='2xl' align='center'>About Us</Heading>
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>

        <Stack>
        <Image
            src={
              'https://lh3.googleusercontent.com/pw/AL9nZEVTr7UCZcmYAlw2851bbIItjcqriYQoJ6LEWZQuE1c_qdXztpOlrMC40Adau6-OL4Au35w0bhCXH5S7AGGfW-Tbq28kOOEZGS_ZaeyaRDmA4D4hqeZM5ZuBtX8PBd4cHd2tTjxNe-kmB5PbVjvbPXhh-HHM4QA4OSbyf4PSQIJBBQNS2QazGwMroiTpZCcxOO5rXpoIZ9I_T5unhs18RG87nx48RL8OTSAvuL_ywaCpyO1L0mbu0ybjUceXVsNSk1yQjzcQ_BDaKvA-twpQijnvVR00_2_1vLmy7dEfa-KJIj9vBH_6qrjQuZMWbb2t9c1WEXhxA63YYSOTNBWZPAbsT1YCyFj5JrZUPpmd1F65ABwEI9WwYMiQ-HUuu1nTrDhGzVyaeTZZvdnj5Dckdw0eNV7LL7098NOKP3pXLrVfNKEO-_FCX0o4ynRsxzz4w0nhkxE7fhuuaZssAl6ZXhRNStEqe8j1LYb6tCvYKLSiepHatwv2Df5AEtC55EDcmP7gZNLN-nuL8QQHQv43FaIttSuj2YN30bXTzjAoGy_CFx24xx-qjIQMewEPdL96Ek7TWUQtCoXtNvYx-eyZ8jDW3LjYVCC1gu_VZO2k73frnwjY9YPbyGH0EUqNKU7uqGDRq6gnJUfKKJO6SYYZgngmYsQRUKFYsJEgbdWAO42JUy-34i4B7-CxzWuB8M7eGI5PRNo61zxSUnIyI6qqxqUiyWB6qvTVVs3Kw5C3FIK_8yZvfWAPsl5vrKbJKbZN0mpY7cv2hbuDQNbHdvpRkXhNl-DUoHgZY0h2ePTjw1kYUG1ni0zJZ0zeeUT3DEXy-D_VAAP5fwbWONm_n0-hRRi3e_Lw2C2sTSxd9zM0f1Rj6Yo2tnx8hqdKMVgeCagOv_CTbwSb61h4nr2hQ7t-FQBHOGU-qHynsr-5CJHw75I0nHTGnYaKz--NP6AmaVp4b1HnYn8cvuiRcgShm3JjiR9-mCV6IHX-Aqx2f9pou0lebKPnOR2Z1SGiXkEXdJbtwlntKneWuumn_2DDZfAJXKKEd14P9MQVEZz5M_9kCt6SGD9kMLvmZ7CFWulAvFdh0t_pzGRI=w866-h965-no?authuser=0'
            }
            layout={'fill'}
          />
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
Costa Rica Manuel Antonio National Rain Forrest
          </Heading>
          <Text color={'gray.500'}>
          "I just love Costa Rica!  Myself and a companion traveled there to the Pacific side and it was just amazing!  The Beautiful Manuel Antonio National Rain Forrest was to die for.  There were monkeys, sloths, rain Forrest black crabs, iguana's and other strange creatures.  It was just breath taking!  We also enjoyed the wonderful coffee, they have amazing coffee plantations.  The food was delicious and so much yummy fruits!  The local's are so warm and welcoming.  There is some much outdoor activities to do there as well."
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://lh3.googleusercontent.com/pw/AL9nZEUaoROVor3nUNo2m7wQPonUPzWN8-tgbNas77o4uvOIFJy-Y5tuv84mEsniAkEjj8UJBmv4P_Vo4xRAssAvjZ3PsIS8RqX8Q8KhVD0v5zC1lO7ULSot6sqxw98ZG6OuPB0eP5su3fq2ckka3KLhzEv65lL24srCbqpb_wpVSncmevvkUsOPv18Lw5_ceE5Isze4Y4N1oRbEz8fPtL9StqmJMsaiGUXcTW_J3ichiiMqsRjmZh0iOKLfHC0fPVCvY6M0UadWu6bLepMqiqctPEYLGrWlEoiyWJPJVqEYPOCIUEWuDSNCo1YBEsHVSwCptMYFbbJR03W_N-puIdCPTgpYBjU8MWI4lUo9lz8tVEnh_b12gotDNS9XNE8JpdkA81Nabyei-oYko1K8E7hDbCgpCVWRQVCYcabo-ol21YKwyoYjkp3i4bILpgZzQvP0PwrliJUHqi6CUpoFh13cESobIrlb1i4cr3Zthm2qVAY-99vV8cgkpr26_M6Bno-HjGqAISa3eIjwGFqKzwBQ5dWG66N1RSd8VHQp6jnUX2mijXfVIOMjVOiUE1iAH7HIVPX-tp5WajozaDffYRSBK9UpMhInQHqZoePuZVskEAf3w5-dXPUhxCgfSxOKjrOa1iBfDexYGZa5yI6MeUo8-DDiU9jXtDSvQ8uRhHhqZirD6QNdcW7i1a-GWVsN6Y3KwbJFos1T3df8HzEmp1GT-Q7aCOunSMBbSP7ggouD5AIQKfre0Bj3JjMBmfr-f_Nwc9RRp9MM_6Mck5wFavdlQc-t_-fnr611NGYlb0JmADNkhidxBDUxIUDAsr2g2dx72YxH8h3s1WoxAk1HQ296_uFYvBEbJ0m0kCjNaLJbyqx6SIjW-d3_n_UFPcHv_x3ecinLblhvuF2_-Ixwsx4a5UPNwP5PCKacJJtOwfvP7DD7pbi_61NIDGbUjD4ozwhc3ppUIKkU5BhwZKHwwR0ZVl0qBrIO6-W2mPDD70yIDGDtyBoEZW_at03hlDu3TZ0oTka2CUntNt-A9-MRwn2rVfX5vYkJiGutr9Qis5TknJvsOldAJcTrAAEaXRAz7JFUWFDO1lxP=w365-h327-no?authuser=0'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Cindy Chynoweth</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
 </ChakraProvider>
    );
  }


export default AboutUsPage;
