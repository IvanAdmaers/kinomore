import { GetStaticProps, NextPage } from 'next';
import { Home } from '@/components/screens/Home/Home';
import { getNewFilms, getNewSeries } from '@/services/KinopoiskService';
import { initStore  } from '@/store/store';

const Index: NextPage = () => {
  return (
    <Home />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filmsLimit, seriesLimit} = state.loadReducer
  
  await store.dispatch(getNewFilms.initiate(filmsLimit))
  await store.dispatch(getNewSeries.initiate(seriesLimit))

  return { props: { initialReduxState: store.getState()}
}}

export default Index;