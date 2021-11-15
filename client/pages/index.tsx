import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { Home as HomeComp } from '../components/Home';
import nookies from 'nookies';

const Home: NextPage = () => {
  return <HomeComp />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  console.log({ cookies });
  return {
    props: {
      oi: 'oi',
    },
  };
};

export default Home;
