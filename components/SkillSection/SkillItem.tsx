import { useRef, useEffect } from 'react';
import './SkillItem.styles.scss';

const SkillItem = ({ skill }: { skill: { label: string } }) => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (titleRef.current && lineRef.current) {
      const titleWidth = titleRef.current.offsetWidth;
      lineRef.current.style.width = `calc(100% - ${titleWidth}px)`;
    }
  }, []);

  return (
    <div className="skill-item-wrapper animate-item">
      <span className="circle"></span>
      <span className="rectangle"></span>
      <h3>
        <span className="title" ref={titleRef}>
          {skill.label}
        </span>
        <span className="line" ref={lineRef}></span>
      </h3>
      <p className="hidden">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        voluptate quod odit excepturi nisi!
      </p>
    </div>
  );
};

export default SkillItem;
