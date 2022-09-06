import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Search } from './views/search';
import { Home } from './views/home';
import { Footer } from './components/footer';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<h2>Favorites</h2>} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </>
  );
};
