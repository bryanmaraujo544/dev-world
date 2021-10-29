import { TextSectionAuth } from '../TextSectionAuth';
import { RegisterAuth } from './RegisterAuth';
import { Grid } from '@chakra-ui/react';

export const Register = () => {
    return (
        <Grid templateColumns={['1fr', '1fr', '1fr', '1fr 480px']} gap={14} w="100%" my={[6, null, null, 10, 12]}>
            <TextSectionAuth
                title="Sign Up Now to Find Developers"
                subtitle="If you already have an account"
                linkText="Sign In Here"
                isRegister
            />
            <RegisterAuth />
        </Grid>
    )
}