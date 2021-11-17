import { useRouter } from 'next/router';
import { forwardRef, useEffect, useCallback } from 'react';
import { SocialAuth } from '.././SocialAuth';
import { Button } from '.././Button';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { MotionInput, MotionFlex } from '../../utils/getMotionComponents';
import {
  xRightAnimationVariants,
  fastContainerVariants,
} from '../../animations/fadeIn';
import { serverApi } from '../../services/serverApi';

type FormTypes = {
  name: string;
  githubUsername: string;
  email: string;
  password: string;
};

export const RegisterAuth = () => {
  const inputBg = useDarkLightColors('gray.100', 'gray.700');
  const inputColor = useDarkLightColors('text.600', 'gray.500');

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FormTypes> = async (
    { name, githubUsername, email, password },
    e
  ) => {
    e?.preventDefault();

    try {
      const { data } = await serverApi.post('/users', {
        name,
        githubUsername,
        email,
        password,
      });
      toast.success(data.message);
      router.push('/login');

    } catch (err) {
      console.log({ err });
    }
  };

  const handleRequiredError = () => {
    const hasRequiredError = Object.values(errors).some(
      (obj) => obj.type === 'required'
    );
    if (hasRequiredError) {
      toast.error('All fields are necessary');
    }
  };

  const Input = forwardRef((props: any, ref: any) => (
    <MotionInput
      ref={ref}
      variants={xRightAnimationVariants}
      p={10}
      bg={inputBg}
      border="none"
      fontSize="xl"
      fontWeight="bold"
      color={inputColor}
      boxShadow="inner"
      rounded="16px"
      mt={4}
      {...props}
    />
  ));

  return (
    <MotionFlex direction="column" mb={24}>
      <motion.form
        variants={fastContainerVariants}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Enter your name..."
          {...register('name', { required: true })}
        />
        <Input
          placeholder="Enter your github username"
          {...register('githubUsername', { required: true })}
        />
        <Input
          placeholder="Enter your email"
          {...register('email', { required: true })}
        />
        <Input
          placeholder="Enter your password"
          {...register('password', { required: true })}
          type="password"
        />
        <Button
          type="submit"
          variants={xRightAnimationVariants}
          onClick={handleRequiredError}
        >
          Sign Up
        </Button>
      </motion.form>
      <SocialAuth />
    </MotionFlex>
  );
};
