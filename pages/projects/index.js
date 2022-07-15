import AllProjects from '../../components/projects/all-projects';
import { getAllProjects } from '../../lib/projects-util';

function AllProjectsPage(props) {
  return <AllProjects projects={props.projects} />;
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
