import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import avatar from '../assets/images/avatar.svg';
import { gmailCompose } from './Contact';
import '../assets/styles/Main.scss';

const links = [
  { href: "https://github.com/dhyey3333", label: "GitHub", icon: <GitHubIcon/> },
  { href: gmailCompose(), label: "Email", icon: <EmailIcon/> },
  { href: `${process.env.PUBLIC_URL}/Dhyey_Ghoda_Resume.pdf`, label: "Resume", icon: <DescriptionIcon/> },
];

function Main() {
  const icons = links.map((link) => (
    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>{link.icon}</a>
  ));

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Dhyey Ghoda" />
        </div>
        <div className="content">
          <div className="social_icons">{icons}</div>
          <h1>Dhyey Ghoda</h1>
          <p>AI/ML &amp; Software Engineer</p>
          <p className="tagline">B.Tech Computer Science, RV University · I build AI agents, computer-vision systems and full-stack apps, and measure every one of them on real benchmarks.</p>

          <div className="mobile_social_icons">{icons}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
