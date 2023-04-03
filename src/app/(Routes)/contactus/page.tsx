'use client';
import ContactSection from '@/app/components/ContactSection';
import FooterSection from '@/app/components/FooterSection';
import NavBar from '@/app/components/navBar';
import { Box, ChakraProvider } from '@chakra-ui/react';

export default function Contactus() {
  return (
    <ChakraProvider>
      <Box backgroundImage='linear-gradient(180deg,#dfedf0,#e6dada)'>
        <NavBar />
        <ContactSection />
        <FooterSection />
      </Box>
    </ChakraProvider>
  );
}
