import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import IndexCSS from '../components/IndexCSS';
import Projects from '../components/Projects';

const about = { name: 'AboutMe', type: 'file', extension: 'js', component: <About /> }
const projects = { name: 'Projects', type: 'file', extension: 'js', component: <Projects /> }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home /> }
const index = { name: 'index', type: 'file', extension: 'css', component: <IndexCSS /> }
const contact = { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> }

const directory = [{
  name: 'profile_of_turboop8',
  type: 'folder',
  children: [
    {
      name: 'src',
      type: 'folder',
      children: [
        {
          name: 'components',
          type: 'folder',
          children: [
            about,
            projects,
          ]
        },
        home,
        index,
      ]
    },
    contact,
  ]
}];

export {
  about,
  projects,
  home,
  index,
  contact,
  directory
};
