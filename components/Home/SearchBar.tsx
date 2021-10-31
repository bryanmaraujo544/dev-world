import { ChangeEvent, useState, useCallback, Dispatch, SetStateAction } from 'react';
import { githubApi } from '../../services/githubApi';

import { Flex, Input } from '@chakra-ui/react';
import { MotionFlex } from '../../utils/getMotionComponents';
import { BiSearchAlt } from 'react-icons/bi';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';


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
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setHasError: Dispatch<SetStateAction<boolean>>
  setUser: Dispatch<SetStateAction<null | User>>
}

export const SearchBar = ({
  setIsLoading,
  setUser,
  setHasError
}: props) => {
  const grayColor = useDarkLightColors('gray.200', 'gray.800');
  const grayLightColor = useDarkLightColors('text.600', 'gray.500');

  const [nameUser, setNameUser] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNameUser(e.target.value);
  }

  const handleSubmit = useCallback(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await githubApi.get(`users/${nameUser}`);

        // Getting the starred repositories and getting que amount of it
        const { data: starredRepos } = await githubApi.get(`users/${nameUser}/starred`);
        const starredAmount = starredRepos.length;

        setIsLoading(false);
        setUser({...data, starred_repos: starredAmount});
      } catch (err) {
        console.log(err);
        setHasError(true);
        setIsLoading(false);
      }
    })();
  }, [nameUser]);


  return (
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
          onChange={(e) => handleInput(e)}
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
          onClick={handleSubmit}
      >
          <BiSearchAlt color="white" size="36px" />
      </MotionFlex>
    </Flex>
  )
}