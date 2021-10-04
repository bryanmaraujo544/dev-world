import type { NextPage } from 'next';
import { Heading, HeadingProps, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Chakra component with motion element
export const MotionHeading = motion<HeadingProps>(Heading);

const Home: NextPage = () => {
     // Function that return the currently color mode and one function to toggle that
     const { colorMode, toggleColorMode } = useColorMode();
     const color = useColorModeValue("text.light", "text.dark");
     return (
          <>
               <MotionHeading
                    whileHover={{ fontSize: '12px' }}
                    color={color}
               >
                    Hello World!
               </MotionHeading>
               <Button 
                    onClick={() => toggleColorMode()}
               >
                    Clich Here to Change Color Moder
               </Button>
          </>
     )
}

export default Home;
