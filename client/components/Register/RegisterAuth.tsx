import { forwardRef, useEffect } from 'react';
import { SocialAuth } from '.././SocialAuth';
import { Button } from '.././Button';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import {
  MotionInput,
  MotionFormControl,
  MotionFlex,
} from '../../utils/getMotionComponents';
import {
  xRightAnimationVariants,
  fastContainerVariants,
} from '../../animations/fadeIn';

export const RegisterAuth = () => {
  const inputBg = useDarkLightColors('gray.100', 'gray.700');
  const inputColor = useDarkLightColors('text.600', 'gray.500');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  // useEffect(() => {
  //   const hasRequiredError = Object.values(errors).some(obj => obj.type === 'required');
  //   if (hasRequiredError) {
  //     toast.error('All fields are necessary :(');
  //   }
  // }, [errors]);

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
    <MotionFlex mb={[12, null, null, 0]} direction="column">
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
        />
        
        <Button type="submit" variants={xRightAnimationVariants}>
          Sign Up
        </Button>
      </motion.form>
      <SocialAuth />
    </MotionFlex>
  );
};
