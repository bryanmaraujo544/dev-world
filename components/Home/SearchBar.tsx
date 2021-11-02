import {
  ChangeEvent,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { githubApi } from '../../services/githubApi';

import { Flex, Input } from '@chakra-ui/react';
import { MotionFlex } from '../../utils/getMotionComponents';
import { BiSearchAlt } from 'react-icons/bi';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';

import { toast } from 'react-toastify';

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
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setHasError: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<null | User>>;
};

export const SearchBar = ({ setIsLoading, setUser, setHasError }: props) => {
  const grayColor = useDarkLightColors('gray.200', 'gray.800');
  const grayLightColor = useDarkLightColors('text.600', 'gray.500');

  const [nameUser, setNameUser] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNameUser(e.target.value);
  };

  const getMostUsedLangs = async () => {
    // Get the most languages used
    const { data: repos } = await githubApi.get(`users/${nameUser}/repos`);

    //  Getting the amount of time the languages was used in projects => ['js', 'js', 'ts', 'ts', 'html']
    const langs = repos.map((repo: any) => repo.language);

    // Grabbing the name of the languages used. Not the amount of projects using this language => ['js', 'ts', 'html', ...]
    let langsName: any = [];
    langs.forEach((lang: string) => {
      if (!langsName.includes(lang) && lang !== null) {
        langsName.push(lang);
      }
    });

    // An array containing arrays with the names of the languages => [['js', 'js'], ['ts', ts'], ['html']]
    const langsSeparated = langsName.map((langName: string) =>
      langs.filter((lang: string) => lang === langName)
    );

    // An array containing arrays with the name and the amount of each language
    const langsNameAmount = langsSeparated.map((langs: any) => [
      langs[0],
      langs.length,
    ]);

    const threeMostUsed = langsNameAmount
      .sort((a: any, b: any) => b[1] - a[1]) // ordering in desc order | the greatest to lowest | 100 - 2
      .slice(0, 3) // Grabbing the first 3
      .map((arr: any) => arr[0]); // returning only the name of the language. Because this array contains the name and the amount

    return threeMostUsed as string[];
  };

  // Trying to get the user's information on github
  const handleSubmit = useCallback(() => {
    (async () => {
      if (nameUser === '') {
        toast.error('Type Something!');
      } else {
        try {
          // Setting error to false because if one of the search get error, the next searchs be reseted
          setHasError(false);
          setIsLoading(true);
          const { data } = await githubApi.get(`users/${nameUser}`);

          // Getting the starred repositories and getting que amount of it
          const { data: starredRepos } = await githubApi.get(
            `users/${nameUser}/starred`
          );
          const starredAmount = starredRepos.length;

          const mostUsedLangs = await getMostUsedLangs();

          setIsLoading(false);
          setUser({
            ...data,
            starred_repos: starredAmount,
            mostUsedLangs,
          });
        } catch (err) {
          console.log(err);
          setHasError(true);
          setIsLoading(false);
        }
      }
    })();
  }, [nameUser]);

  return (
    <Flex h={['60px', null, null, null, '75px']}>
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
  );
};
