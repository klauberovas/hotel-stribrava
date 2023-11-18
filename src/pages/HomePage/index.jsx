import './style.css';
import { Header } from '../../components/Header';
import { Rooms } from '../../components/Rooms';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Rooms />
      <Footer />
    </>
  );
};
