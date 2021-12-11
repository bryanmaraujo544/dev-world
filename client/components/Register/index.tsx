import { TextSectionAuth } from '../TextSectionAuth';
import { RegisterAuth } from './RegisterAuth';
import { Grid } from '@chakra-ui/react';

export const Register = () => {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr', '1fr 0.75fr']}
      gap={14}
      w="100%"
      mt={[6, null, null, 12, 16]}
    >
      <TextSectionAuth
        title="Sign Up Now to Find Developers"
        subtitle="If you already have an account"
        linkText="Sign In Here"
        isRegister
      />
      <RegisterAuth />
    </Grid>
  );
};
