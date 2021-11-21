import Image from 'next/image';
import {
  MotionFlex,
  MotionGrid,
  MotionHeading,
  MotionText,
} from '../../utils/getMotionComponents';
import { Box, Flex } from '@chakra-ui/react';
import { useDarkLightColors } from '../../hooks/useDarkLightColors';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type FavUsers = {
  user_id: number;
  user_username: string;
  favuser_id: number;
  favuser_username: string;
};

type PropTypes = {
  favUsers: Array<FavUsers>;
};

export const FavUsers = ({ favUsers }: PropTypes) => {
  const grayColor = useDarkLightColors('gray.200', 'gray.800');

  console.log('<FavUsers/>', favUsers);
  return (
    <MotionFlex flexDir="column" my={12} w="100%">
      <MotionHeading>Favorited Users</MotionHeading>
      <MotionGrid
        mt={6}
        templateColumns={['1fr', null, null, 'repeat(2, 1fr)']}
        gridGap={4}
      >
        {favUsers.map((favUser) => (
          <MotionFlex
            boxShadow="inner"
            p={6}
            w="100%"
            bg={grayColor}
            rounded={8}
            align="center"
            justify="space-between"
          >
            <Flex align="center">
              <Box
                position="relative"
                h="42px"
                w="42px"
                rounded={8}
                sx={{
                  '.profile-img': {
                    borderRadius: '8px',
                  },
                }}
                bg={grayColor}
              >
                <Image
                  className="profile-img"
                  src={
                    `https://github.com/${favUser.favuser_username}.png` ||
                    'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'
                  }
                  layout="fill"
                />
              </Box>
              <Box>
                <MotionText
                  ml={4}
                  fontSize="xl"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  {favUser.favuser_username}
                </MotionText>
              </Box>
            </Flex>
            <AiFillHeart size="18px" />
          </MotionFlex>
        ))}
      </MotionGrid>
    </MotionFlex>
  );
};
