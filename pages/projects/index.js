import Head from 'next/head';

import AllProjects from '../../components/projects/all-projects';
import { getAllProjects } from '../../lib/projects-util';

function AllProjectsPage(props) {
  return (
    <>
      <Head>
        <title>All Projects</title>
        <meta
          name="description"
          content="A list of all Beam Web Development Projects"
        />
      </Head>
      <AllProjects projects={props.projects} />
    </>
  );
}

export function getStaticProps() {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
}

export default AllProjectsPage;
