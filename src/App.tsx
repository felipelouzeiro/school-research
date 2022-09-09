import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Search } from './views/search';
import { Footer } from './components/footer';
import { Favorites } from './views/favorites';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/search" replace />} />
      </Routes>
      <Footer />
    </>
  );
};
