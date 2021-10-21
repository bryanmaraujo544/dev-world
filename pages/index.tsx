import type { NextPage } from 'next';
import { BiSearchAlt } from 'react-icons/bi';
import { useDarkLightColors } from '../hooks/useDarkLightColors';
import { Box, Flex, Input } from '@chakra-ui/react';
import { Header } from '../components/Header';
import {  MotionFlex } from '../utils/getMotionComponents';


const Home: NextPage = () => {
    const bgColor = useDarkLightColors('bg.light', 'bg.dark');
    const inputBg = useDarkLightColors('gray.200', 'gray.800');
    const inputColor = useDarkLightColors('text.600', 'gray.500');
    
    
    return (
        <Box 
            maxHeight="100vh" 
            maxWidth="100vw" 
            overflow="hidden" 
            bg={bgColor} 
            h={['100%', null, null, '100vh']}
            px={[8, 12, 16, 20, 24]}
        >
            <Header />
            <Flex direction="column">
                <Flex h="80px">
                    <Input 
                        placeholder="Type a dev's name..." 
                        bg={inputBg}
                        px={8}
                        height="100%"
                        rounded="16px"
                        color={inputColor}
                        fontWeight="700"
                        fontSize="20px"
                        border="none"
                        boxShadow="sm"
                        mr={2}
                    />
                    <MotionFlex
                        h="100%"
                        w="100px"
                        align="center"
                        justify="center"
                        cursor="pointer"
                        rounded="16px"
                        bgGradient="linear(to-tr, blue.primary, blue.secondary)"
                    >
                        <BiSearchAlt color="white" size="36px" />
                    </MotionFlex>
                </Flex>
            </Flex>
        </Box>
   
    )
}

export default Home;
