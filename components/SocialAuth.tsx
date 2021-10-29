import { MotionBox, MotionFlex } from '../utils/getMotionComponents';
import { useColorMode, Flex, Box, Text } from '@chakra-ui/react';
import { useDarkLightColors } from '../hooks/useDarkLightColors';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export const SocialAuth = () => {
    const { colorMode } = useColorMode();
    const borderColor = useDarkLightColors('gray.400', 'gray.600');
    return (
        <MotionFlex 
            direction="column" 
            initial={{ opacity: 0 }} 
            animate={{  
                opacity: 1,
                transition: {
                    delay: 1
                }
            }}
        >
            <Flex w="100%" mt={8} align="center" justify="stretch">
                <Box w="100%" h="3px" bg="gray.300" rounded="999px"></Box>
                <Text w="100%" textAlign="center" mx={5} color="gray.300" fontWeight="700" >or continue with</Text>
                <Box w="100%" h="3px" bg="gray.300" rounded="999px" ></Box>
            </Flex>

            <Flex justify="center" mt={8}>
                <MotionBox
                    px={8} py={4}
                    border="2px"
                    borderColor={borderColor}
                    cursor="pointer"
                    rounded="16px"
                    mr={4}
                    whileHover={{ scale: 1.05 }}
                >
                    <AiFillGithub size="32px" color={colorMode === 'dark' ? 'white' : 'black'} />
                </MotionBox>
                <MotionBox
                    px={8} py={4}
                    border="2px"
                    borderColor={borderColor}
                    cursor="pointer"
                    rounded="16px"
                    whileHover={{ scale: 1.05 }}
                >
                    <FcGoogle size="32px" />
                </MotionBox>
            </Flex>
        </MotionFlex>
    )
}