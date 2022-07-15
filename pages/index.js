import { Fragment } from 'react';

import FeaturedProjects from '../components/home-page/featured-projects';
import Hero from '../components/home-page/hero';
import { getFeaturedProjects } from '../lib/projects-util';

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedProjects projects={props.projects} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredProjects = getFeaturedProjects();

  return {
    props: {
      projects: featuredProjects,
    },
  };
}

export default HomePage;
