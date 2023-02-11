import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export default function FooterSection() {
  return (
    <Box backgroundColor={'#202f39'} color={'white'}>
      <SimpleGrid columns={[1, 2, 3]} spacing='40px' p={10}>
        <Box>
          <Text ml={3}>Navigation</Text>
          <UnorderedList styleType={'none'} spacing={4} mt={5}>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Apply</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text ml={3}>Course</Text>
          <UnorderedList styleType={'none'} spacing={4} mt={5}>
            <ListItem>Artificial Intelligence</ListItem>
            <ListItem>Cloud Native and Mobile Web</ListItem>
            <ListItem>Blockchain</ListItem>
            <ListItem>Internet of Things and AI</ListItem>
          </UnorderedList>
        </Box>
        <Box mb={100}>
          <Text ml={3}>Conatct Us</Text>
          <UnorderedList styleType={'none'} spacing={4} mt={5}>
            <ListItem>01212312321312</ListItem>
            <ListItem>www.panavers.com</ListItem>
            <ListItem>@facebook.com</ListItem>
            <ListItem>github/helloworld</ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
      <Box
        h='60px'
        bottom={0}
        position='absolute'
        backgroundColor={'#12232f'}
        w='100%'
        textAlign={'center'}
      >
        <Text mt={3}>Copy Right @panaverse 2022</Text>
      </Box>
    </Box>
  );
}
