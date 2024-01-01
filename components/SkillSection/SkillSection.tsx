'use client';

import './SkillSection.styles.scss';
import { useParallax } from 'react-scroll-parallax';
import SkillItem from './SkillItem';

const skills = [
  {
    label: 'HTML/CSS',
  },
  {
    label: 'Sass',
  },
  {
    label: 'TailwindCSS',
  },
  {
    label: 'Typescript',
  },
  {
    label: 'React',
  },
  {
    label: 'React Native',
  },
  {
    label: 'Next.js',
  },
  {
    label: 'Redux Toolkit',
  },
  {
    label: 'Express.js',
  },
  {
    label: '.Net Core',
  },
];

const SkillSection = () => {
  const parallax = useParallax<HTMLHeadingElement>({
    translateX: [30, -10],
  });
  return (
    <section id="skills" className="skill-section">
      <div className="wrapper relative">
        <h2 ref={parallax.ref} className="section-title">
          My Skills
        </h2>
        <div className="skill-wrapper">
          <span className="vertical-line"></span>
          {skills.map((skill, index) => (
            <SkillItem skill={skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
