import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextField from '@mui/material/TextField';

const EMAIL = 'dhyeyghoda03@gmail.com';

// Gmail's compose page in the browser. A mailto: link only works when a mail app is set up on the
// visitor's computer, and on many it isn't, so clicking it did nothing.
export const gmailCompose = (subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch { window.prompt('Copy my email address:', EMAIL); return; }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // A static site has no server to send mail from, so Send opens Gmail in a new tab with the message
  // already written to me. Nothing is collected or stored by this page.
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = `Hello from ${name.trim()} (via your portfolio)`;
    const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`;
    window.open(gmailCompose(subject, body), '_blank', 'noopener');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Looking for an intern who ships? Write to me here (it opens Gmail with your message ready), or email me directly:</p>
          <p className="email-line">
            <a href={gmailCompose()} target="_blank" rel="noreferrer">{EMAIL}</a>
            <Button size="small" variant="outlined" startIcon={<ContentCopyIcon />} onClick={copyEmail}>{copied ? 'Copied!' : 'Copy'}</Button>
          </p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                label="Your Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="An internship, a project, or a question"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send with Gmail
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
