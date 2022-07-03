import ProjectItem from './project-item';
import classes from './projects-grid.module.css';

function ProjectsGrid(props) {
  const { projects } = props;
  return (
    <ul className={classes.grid}>
      {projects.map(project => (
        <ProjectItem />
      ))}
    </ul>
  );
}

export default ProjectsGrid;
