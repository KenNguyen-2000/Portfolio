'use client';

import { useEffect, useState } from 'react';
import { menus } from '../HeaderBar/HeaderBar';
import './SectionNav.styles.scss';

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerRef = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    menus.forEach((menu) => {
      const section = document.getElementById(menu.toLowerCase());
      if (section) {
        observerRef?.observe(section);
      }
    });

    return () => {
      menus.forEach((menu) => {
        const section = document.getElementById(menu.toLowerCase());
        if (section) {
          observerRef?.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="section-nav-wrapper">
      <ul className="section-nav-list">
        {menus.map((menu, index) => (
          <li key={index}>
            <a
              href={`#${menu.toLowerCase()}`}
              className={`section-nav-item flex-center ${
                activeSection === menu.toLowerCase() ? 'active' : ''
              }`}
            >
              <span></span>
              <span className="sr-only">{menu}</span>
            </a>
            <div className="section-nav-item__tooltip">{menu}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionNav;
