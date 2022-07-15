import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import allProjects from '../components/projects/all-projects';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectsFiles() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectData(projectIndentifier) {
  const projectSlug = projectIndentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(projectsDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
}

export function getAllProjects() {
  const projectFiles = getProjectsFiles();

  const allProjects = projectFiles.map(projectFile => {
    return getProjectData(projectFile);
  });

  const sortedProjects = allProjects.sort();
  return sortedProjects;
}

export function getFeaturedProjects() {
  const allProjects = getAllProjects();

  const featuredProjects = allProjects.filter(project => project.isFeatured);

  return featuredProjects;
}
