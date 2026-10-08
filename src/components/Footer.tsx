import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/dhyey3333" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="mailto:dhyeyghoda03@gmail.com" aria-label="Email"><EmailIcon/></a>
      </div>
      <p>© 2026 Dhyey Ghoda · Design based on a template by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;
