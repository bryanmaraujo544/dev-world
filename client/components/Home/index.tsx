import { useState } from 'react';
import { Header } from '../Header';
import { SearchBar } from './SearchBar';
import { UserBox } from './UserBox';
import { Box, Flex } from '@chakra-ui/react';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { FavUsers } from './FavUsers';
import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';

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

type FavUsers = {
  user_id: number;
  user_username: string;
  favuser_id: number;
  favuser_username: string;
};

type PropTypes = {
  favUsers: Array<FavUsers>;
};

export const Home = ({ favUsers: favusers }: PropTypes) => {
  console.log('<Home/>', { favusers });
  const bgColor = useDarkLightColors('bg.light', 'bg.dark');

  const { '@token': token } = parseCookies();
  const userInfos = jwt.decode(token);

  const [user, setUser] = useState<null | User>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(null);
  const [nameUser, setNameUser] = useState(userInfos?.githubUsername || ''); // This state contains the text of the search box
  const [favUsers, setFavUsers] = useState(favusers);

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
          setIsFavorite={setIsFavorite}
          nameUser={nameUser}
          setNameUser={setNameUser}
        />

        {/* User Box */}
        <UserBox
          isLoading={isLoading}
          hasError={hasError}
          user={user}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          nameUser={nameUser}
          favUsers={favUsers}
          setFavUsers={setFavUsers}
        />

        {/* Favorited Users */}
        <FavUsers
          favUsers={favUsers}
          setIsFavorite={setIsFavorite}
          setFavUsers={setFavUsers}
        />
      </Flex>
    </Box>
  );
};
