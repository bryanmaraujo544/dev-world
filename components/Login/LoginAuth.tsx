import { Flex } from '@chakra-ui/react';
import { MotionInput, MotionFormControl, MotionFlex } from '../../utils/getMotionComponents';
import { Button } from '.././Button';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { SocialAuth } from '.././SocialAuth';
import { xRightAnimationVariants, fastContainerVariants } from '../../animations/fadeIn';

export const LoginAuth = () => {
    const inputBg = useDarkLightColors('gray.100', 'gray.800');
    const inputColor = useDarkLightColors('text.600', 'gray.500');

    return (
        <Flex mb={[12, null, null, 0]} direction='column'>
            <MotionFormControl variants={fastContainerVariants} initial="hidden" animate="show" isRequired>
                <MotionInput variants={xRightAnimationVariants} placeholder="Enter your email" p={6} bg={inputBg} border="none" fontWeight="bold" color={inputColor} boxShadow="sm" rounded="16px" />
                <MotionInput variants={xRightAnimationVariants} placeholder="Enter your password" p={6} mt={6} bg={inputBg} border="none" fontWeight="bold" color={inputColor} boxShadow="sm" rounded="16px" />
                <Button>Sign In</Button>
            </MotionFormControl>
            <SocialAuth />
        </Flex>
    )
}