import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputLeftAddon,
  Select,
  Textarea,
} from '@chakra-ui/react';

export default function ContactSection() {
  return (
    <Flex
      h='3xl'
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading>Contact US</Heading>
      <Box>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder='First name' />
          <FormLabel mt='5'>Email</FormLabel>
          <Input type='email' placeholder='Enter email address' />
          <FormLabel mt='5'>Description</FormLabel>
          <Textarea placeholder='Enter Description ......' />
          <Button colorScheme='teal'>Submit</Button>
        </FormControl>
      </Box>
    </Flex>
  );
}
