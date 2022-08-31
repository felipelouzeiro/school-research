import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<h1>Favorites</h1>} />
      <Route path="/search" element={<h1>Search</h1>} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
