import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from '../components/Logo';
import { useDarkLightColors } from './hooks/useDarkLightColors.';
import { Heading, HeadingProps, Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Login } from '../components/Login';

// Chakra component with motion element
export const MotionHeading = motion<HeadingProps>(Heading);

const Home: NextPage = () => {
     const colorMode = useDarkLightColors('bg.light', 'bg.dark');

     return (
          <Box bg={colorMode} h={['100%', '100%', '100%', '100vh']}>
               <Header />
               <Login />
          </Box>
     )
}

export default Home;
