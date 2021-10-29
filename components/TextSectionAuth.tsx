import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import rocketDark from '../public/Saly-1-1.svg';
import rocketLight from '../public/Saly-1.svg';
import { useAnimation } from 'framer-motion';
import { useDarkLightColors } from '../hooks/useDarkLightColors';
import { useColorMode, Grid, GridItem, Box, Flex, Text, Heading, FormControl, Input, Button } from '@chakra-ui/react';
import { MotionBox, MotionText, MotionHeading, MotionFlex } from '../utils/getMotionComponents';
import { slowContainerVariants, xAnimationVariants, yAnimationVariants } from '../animations/fadeIn';
type Props = {
     title: string,
     subtitle: string,
     linkText: string,
     isRegister?: boolean
}

export const TextSectionAuth = ({
          title,
          subtitle,
          linkText,
          isRegister
     } : Props) => {
     const grayColor = useDarkLightColors('gray.500', 'gray.300');
     const { colorMode } = useColorMode();

     const rocketControl = useAnimation();
     useEffect(() => {
          rocketControl.start('animate')
     }, []);

     const handleRocket = async () => {
          await rocketControl.start('takeOff');
          rocketControl.start('animate');
     }

     const upDownVariant = {
          initial: {
               opacity: 0
          },
          animate: {
               opacity: 1,
               x: 0,
               y: [0, -30, 0, -30],
               
               transition: {
                    delay: 1,
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror"
               }
          },
          takeOff: {
               y: [0, -2000, -2000, 0],
               transition: {
                    duration: 7,
                    times: [0, 0.1, 0.4, 1] 
               }
          }
     }

     return (
          <MotionFlex direction="column" align={['center', 'center', 'center', 'start']} variants={slowContainerVariants} initial="hidden" animate="show" >
               <MotionHeading variants={xAnimationVariants} maxWidth="700px" textAlign={["center", null, null, 'left']} fontFamily="fonts.poppins" as="h1" size="3xl" fontWeight="900" lineHeight={1.3}> 
                    {title}
               </MotionHeading>
               <MotionText variants={xAnimationVariants} textAlign={["center", null, null, 'left']} fontSize="xl" fontWeight="500" color={grayColor} mt={2} mr={1}>
                    {subtitle}
                    <Link href={isRegister ? '/' : '/register'}>
                         <a style={{color: colorMode === 'dark' ? '#F8F9FA' : '#0A0B1A', marginLeft: '6px', fontWeight: 700}}>
                              {linkText}
                         </a>
                    </Link>
               </MotionText>
               <MotionBox 
                    onClick={() => handleRocket()}
                    variants={upDownVariant}
                    animate={rocketControl}
                    initial="initial"
                    cursor="pointer"
                    position="relative"
                    display={['none', null, null, 'block']} 
                    h="150px" 
                    w="300px" 
                    mt={[8, null, 12, null, 20]} >
                    <Image
                         src={colorMode === 'dark' ? rocketDark : rocketLight}
                         layout='fill'
                         objectFit="contain"
                    />
               </MotionBox>
          </MotionFlex>
     )
}