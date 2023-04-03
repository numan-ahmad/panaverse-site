import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Links = [
  { heading: 'Home', link: '/' },
  { heading: 'About', link: '/about' },
  { heading: 'Contact', link: '/contactus' },
];

export default function NavBar() {
  const [value, setValue] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Stack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                src='/panaverseLogo.png'
                alt='Panavers Main Logo'
                width='100'
                height={100}
                className='nav-logo'
              />
            </Box>
          </Stack>
          <div>
            <HStack
              as={'nav'}
              className='logo'
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, index) => (
                <Link href={link.link} key={index}>
                  {link.heading}
                </Link>
              ))}
            </HStack>
          </div>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={() => setValue(true)}
            >
              Apply
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <Link href={link.link} key={index}>
                  {link.heading}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Drawer placement='right' isOpen={value} onClose={() => setValue(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder='First name' />
              <FormLabel mt='5'>Last name</FormLabel>
              <Input placeholder='Last name' />
              <FormLabel mt='5'>Email</FormLabel>
              <Input type='email' placeholder='Enter email address' />
              <FormLabel mt='5'>Gender</FormLabel>
              <Select placeholder='Select Gender'>
                <option>Male</option>
                <option>Female</option>
              </Select>
              <FormLabel mt='5'>Password</FormLabel>
              <Input type='password' />
              <FormLabel mt='5'>Confirm Password</FormLabel>
              <Input type='password' />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={() => setValue(false)}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
