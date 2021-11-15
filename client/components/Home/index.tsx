import { useState } from 'react';
import { Header } from '../Header';
import { SearchBar } from './SearchBar';
import { UserBox } from './UserBox';
import { Box, Flex } from '@chakra-ui/react';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';

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

export const Home = ({ token }: Record<string, string>) => {
  const bgColor = useDarkLightColors('bg.light', 'bg.dark');
  const [user, setUser] = useState<null | User>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        <SearchBar
          setUser={setUser}
          setHasError={setHasError}
          setIsLoading={setIsLoading}
        />

        {/* User Box */}
        <UserBox isLoading={isLoading} hasError={hasError} user={user} />
      </Flex>
    </Box>
  );
};
