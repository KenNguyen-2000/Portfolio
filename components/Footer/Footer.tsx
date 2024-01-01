import './Footer.styles.scss';
import { FacebookIcon, LinkedInIcon } from '../icons';
import GithubIcon from '../icons/GithubIcon';
import { FACEBOOK_URL, GITHUB_URL, LINKED_IN_URL } from '../../shared/data';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="wrapper">
        <div className="footer-wrapper">
          <div className="copyright">
            <p>
              @ <span>{new Date().getFullYear()}</span>
              Developed by{' '}
              <a href="#" target="__blank">
                Nguyen Kien
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <ul className="social-list">
            <li>
              <a target="__blank" href={FACEBOOK_URL} title="Facebook">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a target="__blank" href={LINKED_IN_URL} title="Linked In">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a target="__blank" href={GITHUB_URL} title="Github">
                <GithubIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
