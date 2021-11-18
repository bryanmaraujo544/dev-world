import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { GetServerSideProps } from 'next';
import { Home as HomeComp } from '../components/Home';
import nookies from 'nookies';

import { serverApi } from '../services/serverApi';

type propTypes = {
  children: ReactNode;
  token: string;
};

const Home = (props: propTypes) => {
  return <HomeComp token={props.token} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const token = cookies['@token'];
  console.log({ token });

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

  return {
    props: {
      token: null,
    },
  };
};

export default Home;
