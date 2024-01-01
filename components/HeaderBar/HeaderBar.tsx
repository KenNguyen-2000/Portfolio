'use client';

import { useEffect } from 'react';
import './Header.styles.scss';
import { FacebookIcon, LinkedInIcon } from '../icons';
import Image from 'next/image';

export const menus = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

const HeaderBar = () => {
  const handleToggleMenu = (event: any) => {
    const menu = document.getElementById('menu-wrapper');
    const header = document.querySelector('.header-container');

    if (menu) {
      menu.classList.toggle('show');
    }

    if (header) header.classList.toggle('show');

    const href = event.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      event.preventDefault();

      // Delay the scroll by the duration of your animation (in milliseconds)
      setTimeout(() => {
        // Scroll to the element
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const headerContainer = document.querySelector('.header-container');
      const scrollTop = document.querySelector('.scroll-top') as HTMLDivElement;
      if (headerContainer) {
        if (window.scrollY > 0) {
          headerContainer.classList.add('sticky');
        } else {
          headerContainer.classList.remove('sticky');
        }
      }

      if (scrollTop) {
        if (window.scrollY > 100) {
          scrollTop.style.display = 'block';
        } else if (window.scrollY === 0) {
          scrollTop.style.opacity = '0';
          scrollTop.style.transition = 'opacity 0.5s';

          setTimeout(() => {
            scrollTop.removeAttribute('style');
            scrollTop.style.display = 'none';
          }, 500);
        }
      }
    });

    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <>
      <div
        className="scroll-top"
        style={{ display: 'none' }}
        onClick={handleScrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            strokeWidth={2.5}
            fill="currentColor"
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </svg>
      </div>

      <header className="header-wrapper">
        <nav className="header-container">
          <a href="#" className="h-14">
            <Image
              alt="logo"
              src="/logo.svg"
              width={2000}
              height={1252.09}
              className="block h-full w-auto object-contain object-center align-middle"
            />
          </a>

          <button type="button" onClick={handleToggleMenu}>
            <div className="three-bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </header>
      <div id="menu-wrapper">
        <ul className="menu-content">
          {menus.map((menu, index) => (
            <li key={index}>
              <a
                href={`#${menu.toLowerCase()}`}
                className="menu-link"
                data-index={index}
                data-text={menu}
                onClick={handleToggleMenu}
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>

        <div className="wrapper absolute bottom-10 right-1/2 translate-x-1/2 flex items-center justify-end text-right space-x-20 z-10">
          <div className="email">
            <span className="block text-lg mb-3">Want to talk?</span>
            <a
              href="mailto:ngkien299@gmail.com"
              className="text-base md:text-xl font-semibold text-red-500 transition-all duration-500"
            >
              ngkien299@gmail.com
            </a>
          </div>
          <div className="follow-me">
            <span className="block text-lg mb-3">Follow me:</span>
            <ul className="flex justify-end gap-4">
              <li className="w-7 h-7 flex-center">
                <div className="h-6 w-6">
                  <FacebookIcon />
                </div>
              </li>
              <li className="w-7 h-7 flex-center">
                <div className="h-6 w-6">
                  <LinkedInIcon />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
