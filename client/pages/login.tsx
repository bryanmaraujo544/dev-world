import type { NextPage } from 'next';
import { Header } from '../components/Header';
import LoginSection from '../components/Login';
import { useDarkLightColors } from '../hooks/useDarkLightColors';
import { Box } from '@chakra-ui/react';

const Login: NextPage = () => {
  const colorMode = useDarkLightColors('bg.light', 'bg.dark');

  return (
    <Box
      maxHeight="100vh"
      maxWidth="100vw"
      overflow="hidden"
      bg={colorMode}
      px={[8, 12, 16, 20, 24]}
      h="100%"
    >
      <Header />
      <LoginSection />
    </Box>
  );
};

export default Login;
