'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/navBar';
import Profiles from './components/userProfiles';
import MainSection from './components/MianSection';
import CounterSection from './components/CounterSection';
import CourseSection from './components/CourseSection';
import FooterSection from './components/FooterSection';
const inter = Inter({ subsets: ['latin'] });
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <MainSection />
      <CourseSection />
      <CounterSection />
      <Profiles />
      <FooterSection />
    </ChakraProvider>
  );
}
