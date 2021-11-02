import { SocialAuth } from '.././SocialAuth';
import {
  MotionInput,
  MotionFormControl,
  MotionFlex,
} from '../../utils/getMotionComponents';
import { Button } from '.././Button';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import {
  xRightAnimationVariants,
  fastContainerVariants,
} from '../../animations/fadeIn';

import { useForm } from 'react-hook-form';

export const RegisterAuth = () => {
  const inputBg = useDarkLightColors('gray.100', 'gray.700');
  const inputColor = useDarkLightColors('text.600', 'gray.500');

  const { register, handleSubmit } = useForm();

  const Input = (props: any) => (
    <MotionInput
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
  );

  return (
    <MotionFlex mb={[12, null, null, 0]} direction="column">
      <MotionFormControl
        variants={fastContainerVariants}
        initial="hidden"
        animate="show"
      >
        <Input placeholder="Enter your name..." {...register('name')} />
        <Input
          placeholder="Enter your github username"
          {...register('githubUsername')}
        />
        <Input placeholder="Enter your email" {...register('email')} />
        <Input placeholder="Enter your password" {...register('password')} />
        <Button variants={xRightAnimationVariants} type="submit">
          Sign Up
        </Button>
      </MotionFormControl>
      <SocialAuth />
    </MotionFlex>
  );
};
