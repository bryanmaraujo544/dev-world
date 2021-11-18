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

  try {
    const {
      data: { auth },
    } = await serverApi.get('auth');

    console.log({ auth });

    if (!auth) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  } catch (err) {
    console.log('Happened an error in index page', err);
  }

  return {
    props: {
      token: null,
    },
  };
};

export default Home;
