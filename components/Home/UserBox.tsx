import Image from 'next/image';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { Grid, Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { HiOutlineUsers, HiUsers } from 'react-icons/hi';
import { RiGitRepositoryLine, RiStarSmileLine, RiToolsFill } from 'react-icons/ri';

type User = {
    avatar_url: string,
    bio: string,
    followers: number,
    following: number,
    name: string,
    login: string,
    public_repos: number,
    starred_repos: number
}

type props = {
    isLoading: boolean,
    hasError: boolean,
    user: User | null
}

export const UserBox = ({
    isLoading,
    hasError,
    user
}: props) => {
  const grayColor = useDarkLightColors('gray.200', 'gray.800');
  const grayLightColor = useDarkLightColors('text.600', 'gray.500');
  const titleColor = useDarkLightColors('text.light', 'text.dark');

  console.log({isLoading})

  return (
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
      minHeight="220px"
  >
    {   isLoading
        ? 
            <h1>Loading</h1>
        : 
        hasError 
        ? 
            <h1> Some error happended </h1>
        :
            <>
                {/* Profile Image  */}
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
                        src={user?.avatar_url || 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'}
                        layout="fill"
                        objectFit="cover"
                        className="profile-img"
                    />
                </ Box>
                
                {/* Bio */}
                <Flex direction="column">
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
            </>
    }
  </Grid>
  )
}