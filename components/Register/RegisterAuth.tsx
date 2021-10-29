import { SocialAuth } from '.././SocialAuth';
import { MotionInput, MotionFormControl, MotionFlex } from '../../utils/getMotionComponents';
import { Button } from '.././Button';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { xRightAnimationVariants, fastContainerVariants } from '../../animations/fadeIn';

export const RegisterAuth = () => {
    const inputBg = useDarkLightColors('gray.100', 'gray.700');
    const inputColor = useDarkLightColors('text.600', 'gray.500');

    return (
        <MotionFlex mb={[12, null, null, 0]} direction='column'>
            <MotionFormControl variants={fastContainerVariants} initial="hidden" animate="show" isRequired>
                <MotionInput variants={xRightAnimationVariants} placeholder="Enter your name" p={6} bg={inputBg} border="none" fontWeight="bold" color={inputColor} boxShadow="sm" rounded="16px" />
                <MotionInput variants={xRightAnimationVariants} placeholder="Enter your username" p={6} bg={inputBg} border="none" fontWeight="bold" color={inputColor} boxShadow="sm" rounded="16px" mt={4} />
                <MotionInput variants={xRightAnimationVariants} placeholder="Enter your email" p={6} bg={inputBg} border="none" fontWeight="bold" color={inputColor} boxShadow="sm" rounded="16px" mt={4} />
                <MotionInput variants={xRightAnimationVariants} placeholder="Enter your password" p={6} bg={inputBg} border="none" fontWeight="bold" color={inputColor} boxShadow="sm" rounded="16px" mt={4} />
                <Button variants={xRightAnimationVariants}>Sign Up</Button>
            </MotionFormControl>
            <SocialAuth />
        </MotionFlex>
    )
}