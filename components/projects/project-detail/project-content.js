import ReactMarkdown from 'react-markdown';

import ProjectHeader from './project-header';
import classes from './project-content.module.css';

function ProjectContent(props) {
  const { project } = props;
  const imagePath = `/images/projects/${project.slug}/${project.image}`;

  const customRenderers = {
    image(image) {},
  };

  return (
    <article className={classes.content}>
      <ProjectHeader title={project.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>
        {project.content}
      </ReactMarkdown>
    </article>
  );
}

export default ProjectContent;
