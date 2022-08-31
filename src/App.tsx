import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './views/home';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<h2>Favorites</h2>} />
        <Route path="/search" element={<h2>Search</h2>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};
