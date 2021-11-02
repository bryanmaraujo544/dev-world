import Image from 'next/image';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { Grid, Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { HiOutlineUsers, HiUsers } from 'react-icons/hi';
import {
  RiGitRepositoryLine,
  RiStarSmileLine,
  RiToolsFill,
  RiEmotionSadLine,
} from 'react-icons/ri';
import { useColorMode } from '@chakra-ui/color-mode';
import ReactLoading from 'react-loading';

type User = {
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  name: string;
  login: string;
  public_repos: number;
  starred_repos: number;
  mostUsedLangs: string[];
  followers_url: string;
  following_url: string;
  repos_url: string;
  starred_url: string;
};

type props = {
  isLoading: boolean;
  hasError: boolean;
  user: User | null;
};

export const UserBox = ({ isLoading, hasError, user }: props) => {
  const { colorMode } = useColorMode();
  const grayColor = useDarkLightColors('gray.200', 'gray.800');
  const grayLightColor = useDarkLightColors('text.600', 'gray.500');
  const titleColor = useDarkLightColors('text.light', 'text.dark');

  return (
    <Grid
      templateColumns={['1fr', null, null, null, '0.75fr 1fr 1fr 1fr']}
      mt={[8, null, 10, null, 12]}
      bg={grayColor}
      p={[8, null, null, 10, 12]}
      rounded="16px"
      gap={[8, 10, 12, 14, 16]}
      minHeight="220px"
      justifyContent="center"
      alignItems="center"
      boxShadow="inner"
    >
      {isLoading ? (
        <Flex gridColumn="1 / 5" justify="center">
          <ReactLoading
            type="spinningBubbles"
            className="react-loading"
            color={colorMode === 'light' ? '#0A0B1A' : 'F8F9FA'}
          />
        </Flex>
      ) : hasError ? (
        <Flex gridColumn="1 / 5" justify="center">
          <Flex align="center">
            <RiEmotionSadLine size="64px" />
            <Text ml={4} fontSize={['2xl', null, null, '4xl']} fontWeight="700">
              This User Doesn't Exists.
            </Text>
          </Flex>
        </Flex>
      ) : (
        <>
          {/* Profile Image  */}
          <Box
            position="relative"
            w="100%"
            h={['120px', null, null, null, '100%']}
            sx={{
              '.profile-img': {
                borderRadius: '16px',
              },
            }}
          >
            <Image
              src={
                user?.avatar_url ||
                'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'
              }
              layout="fill"
              objectFit="cover"
              className="profile-img"
            />
          </Box>

          {/* Bio */}
          <Flex direction="column">
            <Heading as="h2" color={titleColor}>
              {user?.name}
            </Heading>
            <Link
              href={`https://github.com/${user?.login}`}
              target="_blank"
              fontSize="lg"
              mt={2}
              fontWeight="500"
              color={grayLightColor}
            >
              {user?.login}
            </Link>
            <Text fontSize="xl" color={grayLightColor} fontWeight="700" mt={4}>
              {user?.bio}
            </Text>
          </Flex>

          {/* Languages used */}
          <Flex direction="column">
            <Flex align="center" mb={2}>
              <RiToolsFill size="24px" />
              <Heading as="h3" mx={2}>
                Languages
              </Heading>
            </Flex>
            {user?.mostUsedLangs.map((lang: string) => (
              <Text
                fontSize="2xl"
                fontWeight="500"
                color={grayLightColor}
                mt={2}
                key={lang}
              >
                {lang}
              </Text>
            ))}
          </Flex>

          {/* Main infos */}
          <Flex direction="column">
            <Flex align="center">
              <HiOutlineUsers size="24px" />
              <Link
                href={`https://github.com/${user?.login}?tab=followers`}
                target="_blank"
                fontSize="xl"
                color={grayLightColor}
                fontWeight="500"
                mx={2}
              >
                Followers
              </Link>
              <Text fontSize="xl" fontWeight="700">
                {user?.followers}
              </Text>
            </Flex>
            <Flex align="center" mt={4}>
              <HiUsers size="24px" />
              <Link
                href={`https://github.com/${user?.login}?tab=following`}
                target="_blank"
                fontSize="xl"
                color={grayLightColor}
                fontWeight="500"
                mx={2}
              >
                Following
              </Link>
              <Text fontSize="xl" fontWeight="700">
                {user?.following}
              </Text>
            </Flex>
            <Flex align="center" mt={4}>
              <RiGitRepositoryLine size="24px" />
              <Link
                href={`https://github.com/${user?.login}?tab=repositories`}
                target="_blank"
                fontSize="xl"
                color={grayLightColor}
                fontWeight="500"
                mx={2}
              >
                Repositories
              </Link>
              <Text fontSize="xl" fontWeight="700">
                {user?.public_repos}
              </Text>
            </Flex>
            <Flex align="center" mt={4}>
              <RiStarSmileLine size="24px" />
              <Link
                href={`https://github.com/${user?.login}?tab=stars`}
                target="_blank"
                fontSize="xl"
                color={grayLightColor}
                fontWeight="500"
                mx={2}
              >
                Starred
              </Link>
              <Text fontSize="xl" fontWeight="700">
                {user?.starred_repos}
              </Text>
            </Flex>
          </Flex>
        </>
      )}
    </Grid>
  );
};
