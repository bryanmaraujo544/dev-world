import type { NextPage } from 'next';
import Image from 'next/image';
import { useDarkLightColors } from '../hooks/useDarkLightColors';
import { Box, Flex, Input, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import {  MotionFlex } from '../utils/getMotionComponents';

import { BiSearchAlt } from 'react-icons/bi';
import { HiUsers, HiOutlineUsers } from 'react-icons/hi';
import { RiGitRepositoryLine, RiStarSmileLine, RiToolsFill } from 'react-icons/ri';

const Home: NextPage = () => {
    const bgColor = useDarkLightColors('bg.light', 'bg.dark');
    const grayColor = useDarkLightColors('gray.200', 'gray.800');
    const grayLightColor = useDarkLightColors('text.600', 'gray.500');
    const titleColor = useDarkLightColors('text.light', 'text.dark');
    const boxBg = useDarkLightColors('gray.100', 'blue.900');
    
    return (
        <Box 
            minHeight="100vh"
            maxWidth="100vw" 
            overflow-x="hidden" 
            bg={bgColor} 
            px={[8, 12, 16, 20, 24]}
        >
            <Header />
            <Flex direction="column" mt={[12, 16, 20, null, 24]}>

                {/* Search Bar */}
                <Flex h={["60px", null, null, null, "75px"]}>
                    <Input 
                        placeholder="Type a dev's name..." 
                        bg={grayColor}
                        px={8}
                        height="100%"
                        rounded="16px"
                        color={grayLightColor}
                        fontWeight="700"
                        fontSize="2xl"
                        border="none"
                        boxShadow="sm"
                        mr={4}
                    />
                    <MotionFlex
                        h="100%"
                        w="100px"
                        align="center"
                        justify="center"
                        cursor="pointer"
                        rounded="16px"
                        bgGradient="linear(to-tr, blue.primary, blue.secondary)"
                        whileHover={{ scale: 1.05 }}
                    >
                        <BiSearchAlt color="white" size="36px" />
                    </MotionFlex>
                </Flex>

                {/* User Box */}
                <Grid 
                    templateColumns={[
                        "1fr",
                        null,
                        null,
                        null,
                        "0.75fr 1fr 1fr 1fr",
                        
                    ]}
                    mt={[8, null, 10, null, 12]}
                    bg={grayColor}
                    p={[8, null, null, 10, 12]}
                    rounded="16px"
                    gap={[8, 10, 12, 14, 16]}
                >
                    {/* Profile Image */}
                    <Box 
                        position="relative" 
                        w="100%" h={["120px", null, null, null, "100%"]}
                        sx={{
                            ".profile-img": {
                                borderRadius: '16px'
                            }
                        }} 
                    >
                        <Image 
                            src="https://github.com/bryanmaraujo544.png"
                            layout="fill"
                            objectFit="cover"
                            className="profile-img"
                        />
                    </ Box>

                    {/* Bio */}
                    <Flex direction="column" >
                        <Heading as="h2" color={titleColor}> Bryan Martins </Heading>
                        <Link href="https://google.com" target="_blank" fontSize="lg" mt={2} fontWeight="500" color={grayLightColor} > bryanmaraujo544 </Link>
                        <Text fontSize="xl" color={grayLightColor} fontWeight="700" mt={4} > Front-end Developer | React; Next.js; JavaScript; TypeScript; SASS, TailwindCss. </Text>
                    </Flex>

                    {/* Languages used */}
                    <Flex direction="column">
                        <Flex align="center" mb={4} > 
                            <RiToolsFill size="24px" /> 
                            <Heading as="h3" mx={2} > Languages </Heading> 
                        </Flex>
                        <Text fontSize="2xl" fontWeight="500" color={grayLightColor} > Javascript </Text>
                        <Text fontSize="2xl" fontWeight="500" color={grayLightColor} my={2}> Typescript </Text>
                        <Text fontSize="2xl" fontWeight="500" color={grayLightColor} > SCSS </Text>
                    </Flex>

                    {/* Main infos */}
                    <Flex direction="column" >
                        <Flex align="center" > 
                            <HiOutlineUsers size="24px" /> 
                            <Text fontSize="xl" color={grayLightColor} fontWeight="500" mx={2} > Followers </Text> 
                            <Text fontSize="xl" fontWeight="700" > 46 </Text> 
                        </Flex>
                        <Flex align="center" mt={4}> 
                            <HiUsers size="24px" /> 
                            <Text fontSize="xl" color={grayLightColor} fontWeight="500" mx={2} > Following </Text>
                            <Text fontSize="xl" fontWeight="700" > 46 </Text> 
                        </Flex>
                        <Flex align="center" mt={4}> 
                            <RiGitRepositoryLine size="24px" /> 
                            <Text fontSize="xl" color={grayLightColor} fontWeight="500" mx={2} > Repositories </Text>
                            <Text fontSize="xl" fontWeight="700" > 12 </Text> 
                        </Flex>
                        <Flex align="center" mt={4}> 
                            <RiStarSmileLine size="24px" /> 
                            <Text fontSize="xl" color={grayLightColor} fontWeight="500" mx={2} > Following </Text>
                            <Text fontSize="xl" fontWeight="700" > 46 </Text> 
                        </Flex>
                        
                    </Flex>
                </Grid>
            </Flex>
        </Box>
    )
}

export default Home;
