import './ProjectSection.styles.scss';

import ProjectCard from './ProjectCard';
import { projects } from '../../shared/data';
import ParallaxTitle from './ParallaxTitle';

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-section flex-center flex-col">
      <div className="overlay"></div>
      <ParallaxTitle />
      <div className="wrapper">
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
