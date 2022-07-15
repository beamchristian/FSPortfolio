import Image from 'next/image';

import classes from './project-header.module.css';

function ProjectHeader(props) {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default ProjectHeader;
