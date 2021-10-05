import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Logo } from '../components/Logo';
import { Heading, HeadingProps, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';

// Chakra component with motion element
export const MotionHeading = motion<HeadingProps>(Heading);

const Home: NextPage = () => {
     // Function that return the currently color mode and one function to toggle that
     const { colorMode, toggleColorMode } = useColorMode();
     const color = useColorModeValue("text.light", "text.dark");
     return (
          <>
               <Header />
          </>
     )
}

export default Home;
