import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { GetServerSideProps } from 'next';
import { Home as HomeComp } from '../components/Home';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { serverApi } from '../services/serverApi';

type FavUsers = {
  user_id: number;
  user_username: string;
  favuser_id: number;
  favuser_username: string;
};

type PropTypes = {
  children: ReactNode;
  favUsers: Array<FavUsers>;
};

const Home = (props: PropTypes) => {
  return <HomeComp favUsers={props.favUsers} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const token = cookies['@token'];

  if (token) {
    serverApi.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  const { data } = await serverApi.get('auth');

  if (!data.auth) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // I'm not checking if the jwt is valid because I have sure it is because we checked before the page's rendered (above)
  const tokenDecoded = jwt.decode(token);
  const { data: favUsers } = await serverApi.get(
    `/fav-users/${tokenDecoded?.id}`
  );

  return {
    props: {
      favUsers: favUsers.favUsers,
    },
  };
};

export default Home;
