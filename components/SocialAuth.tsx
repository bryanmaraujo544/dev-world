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
            <Flex w="100%" mt={10} align="center" justify="stretch">
                <Box w="100%" h="3px" bg="gray.400" rounded="999px"></Box>
                <Text w="100%" textAlign="center" color="gray.400" fontSize="xl" fontWeight="700" >or continue with</Text>
                <Box w="100%" h="3px" bg="gray.400" rounded="999px" ></Box>
            </Flex>

            <Flex mt={10} justify="center">
                <MotionFlex
                    align="center"
                    justify="center"
                    bg={colorMode === 'light' ? 'black' : 'white'}
                    px={8} py={3}
                    cursor="pointer"
                    rounded="16px"
                    whileHover={{ scale: 1.05 }}
                    w="100%"
                >
                    <Text  color={colorMode === 'light' ? 'white' : 'black'} fontSize="xl" fontWeight="700" mr={4}>Login with Github</Text>
                   
                    <AiFillGithub size="32px" color={colorMode === 'light' ? 'white' : 'black'} />
                </MotionFlex>
            </Flex>
        </MotionFlex>
    )
}