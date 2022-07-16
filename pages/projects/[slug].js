import Head from 'next/head';

import ProjectContent from '../../components/projects/project-detail/project-content';
import { getProjectData, getProjectsFiles } from '../../lib/projects-util';

function ProjectDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.project.title}</title>
        <meta name="description" content={props.project.excerpt} />
      </Head>
      <ProjectContent project={props.project} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const projectFilenames = getProjectsFiles();

  const slugs = projectFilenames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ProjectDetailPage;
