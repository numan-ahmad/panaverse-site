import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

export default function CourseSection() {
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing='40px' p={10} textAlign={'center'}>
      <Card>
        <CardHeader backgroundColor={'#192a56'} color={'white'}>
          <Heading size='md'>Artificial Intelligence</Heading>
        </CardHeader>
        <CardBody mt={6}>
          <Text fontSize='xs'>
            A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING
            PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF
            AI.
          </Text>
        </CardBody>
        <CardFooter justifyContent={'center'}>
          <Button backgroundColor={'#192a56'} color={'white'}>
            View Details
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader backgroundColor={'#e1006a'} color={'white'}>
          <Heading size='md'> Cloud Native and Mobile Web</Heading>
        </CardHeader>
        <CardBody mt={6}>
          <Text fontSize='xs'>
            A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
            GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND
            MULTI-CLOUD NATIVE COMPUTING.
          </Text>
        </CardBody>
        <CardFooter justifyContent={'center'}>
          <Button backgroundColor={'#e1006a'} color={'white'}>
            View Details
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader backgroundColor={'#fbc314'} color={'white'}>
          <Heading size='md'> Blockchain</Heading>
        </CardHeader>
        <CardBody mt={6}>
          <Text fontSize='xs'>
            A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS
            GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND
            SMART CONTRACTS.
          </Text>
        </CardBody>
        <CardFooter justifyContent={'center'}>
          <Button backgroundColor={'#fbc314'} color={'white'}>
            View Details
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader backgroundColor={'#1b8f8b'} color={'white'}>
          <Heading size='md'> Internet of Things and AI</Heading>
        </CardHeader>
        <CardBody mt={6}>
          <Text fontSize='xs'>
            A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS
            GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI.
          </Text>
        </CardBody>
        <CardFooter justifyContent={'center'}>
          <Button backgroundColor={'#1b8f8b'} color={'white'}>
            View Details
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
