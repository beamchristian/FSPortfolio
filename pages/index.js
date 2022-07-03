import { Fragment } from 'react';
import FeaturedProjects from '../components/home-page/featured-projects';

import Hero from '../components/home-page/hero';

const DUMMY_PROJECTS = [
  {
    slug: 'Project-1-example',
    title: 'Project 1 Example',
    image: 'Project-1-example.png',
    excerpt:
      'This is an example of a project, that will be conditionally rendered.',
    date: '2022-02-04',
  },
  {
    slug: 'Project-2-example',
    title: 'Project 2 Example',
    image: 'Project-1-example.png',
    excerpt:
      'This is an example of a project, that will be conditionally rendered 2.',
    date: '2022-02-10',
  },
  {
    slug: 'Project-3-example',
    title: 'Project 3 Example',
    image: 'Project-1-example.png',
    excerpt:
      'This is an example of a project, that will be conditionally rendered 3.',
    date: '2022-02-22',
  },
  {
    slug: 'Project-4-example',
    title: 'Project 4 Example',
    image: 'Project-1-example.png',
    excerpt:
      'This is an example of a project, that will be conditionally rendered 4.',
    date: '2022-02-28',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects projects={DUMMY_PROJECTS} />
    </>
  );
}

export default HomePage;
