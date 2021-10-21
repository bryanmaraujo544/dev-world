import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Login as LoginSection } from '../components/Login';
import { useDarkLightColors } from '../hooks/useDarkLightColors';
import { Box } from '@chakra-ui/react';


export const Login : NextPage = () => {
    const colorMode = useDarkLightColors('bg.light', 'bg.dark');

    return (
        <Box 
            maxHeight="100vh" 
            maxWidth="100vw" 
            overflow="hidden" 
            bg={colorMode} 
            px={[8, 12, 16, 20, 24]}
            h={['100%', null, null, '100vh']}
        >
            <Header />
            <LoginSection />
        </Box>
    )
}