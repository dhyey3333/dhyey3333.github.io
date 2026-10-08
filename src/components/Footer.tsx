import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'
import { gmailCompose } from './Contact';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/dhyey3333" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href={gmailCompose()} target="_blank" rel="noreferrer" aria-label="Email"><EmailIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;
