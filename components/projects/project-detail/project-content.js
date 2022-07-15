import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import ProjectHeader from './project-header';
import classes from './project-content.module.css';

function ProjectContent(props) {
  const { project } = props;
  const imagePath = `/images/projects/${project.slug}/${project.image}`;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/projects/${project.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/projects/${project.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
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
