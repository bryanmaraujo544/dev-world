import { Grid, Flex, Box, Text } from '@chakra-ui/react';
import { TextSectionAuth } from '../TextSectionAuth';
import { LoginAuth } from './LoginAuth';

const Login = () => {
    return (
        <Grid templateColumns={['1fr', '1fr', '1fr', '1fr 480px']}w="100%" gap={16} mt={[6, null, null, 12, 20]}>
            <TextSectionAuth
                title="Sign in to find new developers"
                subtitle="If you do not have an account"
                linkText="Register Here."
            />
            <LoginAuth />
        </Grid>
    )
}

export default Login;
