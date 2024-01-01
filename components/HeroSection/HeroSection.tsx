import './HeroSection.styles.scss';
import { FacebookIcon, LinkedInIcon } from '../icons';
import {
  FACEBOOK_URL,
  GITHUB_URL,
  LAST_NAME,
  LINKED_IN_URL,
  TITLE,
} from '@/shared/data';
import GithubIcon from '../icons/GithubIcon';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="section-wrapper hero-wrapper">
      <div className="wrapper">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="animate-item">Hi! I&apos;m {LAST_NAME}</h1>
            <h2 className="animate-item">{TITLE}</h2>

            <a href="#contact" className="hire-me-btn animate-item">
              Hire me
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image animate-item"></div>
        <Image
          src={'/dot-texture.png'}
          alt="dot texture"
          width={90}
          height={510}
          className="dot-texture animate-item"
        />
      </div>
      <div className="scroll-down animate-item">
        Scroll down
        <Image
          width={33}
          height={47}
          alt="arrow down"
          src={'/scroll-down-arrow.png'}
        />
      </div>
      <ul className="social-list">
        <li>
          <a title="Facebook" target="__blank" href={FACEBOOK_URL}>
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a title="Linked In" target="__blank" href={LINKED_IN_URL}>
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a title="Github" target="__blank" href={GITHUB_URL}>
            <GithubIcon />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default HeroSection;
