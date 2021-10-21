import type { NextPage } from 'next';
import { Register as RegisterSection } from '../components/Register';
import { Box } from '@chakra-ui/react';
import { useDarkLightColors } from '../hooks/useDarkLightColors';
import { Header } from '../components/Header';

export const Register: NextPage = () => {
    const colorMode = useDarkLightColors('bg.light', 'bg.dark');

    return (
        <Box
            px={[8, 12, 16, 20, 24]}
            bg={colorMode}
            h={['100%', null, null, '100vh']}
        >
            <Header />
            <RegisterSection />
        </Box>
    )
}

export default Register;