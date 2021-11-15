import { serverApi } from '../../services/serverApi';
import { setCookie } from 'nookies';
import { forwardRef, RefAttributes } from 'react';
import { Flex } from '@chakra-ui/react';
import { Button } from '.././Button';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { SocialAuth } from '.././SocialAuth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import {
  MotionInput,
  MotionFormControl,
} from '../../utils/getMotionComponents';
import {
  xRightAnimationVariants,
  fastContainerVariants,
} from '../../animations/fadeIn';

type FormTypes = {
  email: string;
  password: string;
};

export const LoginAuth = () => {
  const inputBg = useDarkLightColors('gray.100', 'gray.800');
  const inputColor = useDarkLightColors('text.600', 'gray.500');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function wich will receive the data from form.
  // the func is passed inside of one func of reac-hook-form
  const onSubmit: SubmitHandler<FormTypes> = async ({ email, password }, e) => {
    try {
      const { data } = await serverApi.post('/auth/login', {
        email,
        password,
      });
      const token = data.token;
      setCookie(null, '@token', token, {
        maxAge: 30 * 24 * 60 * 60,
      });

      toast.success(data.message);
    } catch (err: any) {
      const response = err.response?.data;
      toast.error(response?.message);
    }
  };

  // Every the submit button is clicked this function is runned
  const handleRequiredError = () => {
    const hasRequiredError = Object.values(errors).some(
      (obj) => obj.type === 'required'
    );
    if (hasRequiredError) {
      toast.error('All fields are necessary');
    }
  };

  return (
    <Flex
      onSubmit={handleSubmit(onSubmit)}
      mb={[12, null, null, 0]}
      direction="column"
    >
      <motion.form
        variants={fastContainerVariants}
        initial="hidden"
        animate="show"
      >
        <MotionInput
          variants={xRightAnimationVariants}
          boxShadow="inner"
          p={10}
          bg={inputBg}
          border="none"
          fontSize="xl"
          fontWeight="bold"
          color={inputColor}
          rounded="16px"
          placeholder="Enter your email"
          {...register('email', { required: true })}
          type="email"
        />
        <MotionInput
          variants={xRightAnimationVariants}
          boxShadow="inner"
          p={10}
          bg={inputBg}
          border="none"
          fontSize="xl"
          fontWeight="bold"
          color={inputColor}
          rounded="16px"
          placeholder="Enter your password"
          mt={4}
          {...register('password', { required: true })}
          type="password"
        />
        <Button type="submit" onClick={handleRequiredError}>
          Sign In
        </Button>
      </motion.form>
      <SocialAuth />
    </Flex>
  );
};
