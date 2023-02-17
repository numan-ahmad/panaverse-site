import { Box, Heading, Text } from '@chakra-ui/react';

export default function MainSection() {
  return (
    <Box
      h={600}
      backgroundImage="url('/mainImage.jpg')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='100% 100%'
    >
      <Box w='65%'>
        <Heading textAlign={'center'} pt='5%'>
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </Heading>
        <Text fontSize='lg' textAlign={'center'} pt='2%'>
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </Text>
      </Box>
    </Box>
  );
}
