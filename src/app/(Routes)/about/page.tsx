'use client';
import AboutSection from '@/app/components/AboutSection';
import FooterSection from '@/app/components/FooterSection';
import NavBar from '@/app/components/navBar';
import { Box, ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Box backgroundImage='linear-gradient(180deg,#dfedf0,#e6dada)'>
        <NavBar />
        <AboutSection />
        <FooterSection />
      </Box>
    </ChakraProvider>
  );
}
