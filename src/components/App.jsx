import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/home';
import AboutMe from './AboutMe/aboutMe';
import WorkExpirience from './WorkExpirience/WorkExpirience';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import PageNotFound from './PageNotFound/PageNotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" index element={<AboutMe />} />
          <Route path="/expirience" element={<WorkExpirience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
};
