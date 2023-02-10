import { Box, Heading, Text } from '@chakra-ui/react';

export default function MainSection() {
  const outerBoxStyles = {
    height: '700px',
    width: '900px',
    maxWidth: '100%',
    background: 'url(../main.jpg) center/cover no-repeat',
  };

  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  };
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
