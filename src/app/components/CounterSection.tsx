import {
  Box,
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

export default function CounterSection() {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 3 }}
      spacing='2'
      textAlign={'center'}
      padding='5%'
      backgroundColor={'#c4c4c4'}
    >
      <Stat marginTop={10}>
        <Text fontSize='xl'>Total Number Of Student</Text>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          23.36%
        </StatHelpText>
      </Stat>
      <Stat marginTop={10}>
        <Text fontSize='xl'>Pass Out Student</Text>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          23.36%
        </StatHelpText>
      </Stat>
      <Stat marginTop={10}>
        <Text fontSize='xl'>Number Of Application Recived</Text>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          23.36%
        </StatHelpText>
      </Stat>
    </SimpleGrid>
  );
}
