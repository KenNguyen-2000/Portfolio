import './ProjectCard.styles.scss';
import Image from 'next/image';

type ProjectCardProps = {
  project: {
    type: string;
    name: string;
    description: string;
    git_link: string;
    live_link?: string;
    project_image_path: string;
  };
  index: number;
};

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-img-area">
        <span className="item-count animate-item">0{index + 1}</span>
        <Image
          alt="project"
          width={400}
          height={300}
          src={project.project_image_path}
          className="animate-item w-auto h-auto"
        />
      </div>

      <div className="project-card-content-area">
        <span className="project-type animate-item">{project.type}</span>
        <h2 className="animate-item">{project.name}</h2>
        <p className="animate-item">{project.description}</p>
        {project.live_link && (
          <a
            href={project.live_link}
            target="__blank"
            rel="noopener noreferrer"
            className="view-live animate-item"
          >
            View Live
            <span>
              <Image
                alt="arrow right"
                width={20}
                height={13}
                src={'/arrow-right-white.png'}
              />
            </span>
          </a>
        )}
        {project.git_link && (
          <a
            href={project.git_link}
            target="__blank"
            rel="noopener noreferrer"
            className="view-live animate-item ml-6"
          >
            Git
            <span>
              <Image
                alt="arrow right"
                width={20}
                height={13}
                src={'/arrow-right-white.png'}
              />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
