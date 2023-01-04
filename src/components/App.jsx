import { Routes, Route, Link } from 'react-router-dom';
import Home from 'pages/Home/home';
import AboutMe from '../pages/AboutMe/aboutMe';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </div>
  );
};
