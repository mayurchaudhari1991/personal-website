import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Mayur Chaudhari</h2>
        <p><a href="mailto:simplymayu1991@gmail.com">simplymayu1991@gmail</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mayur. I am a <a href="http://siom.sinhgad.edu/">MCA SIOM</a> graduate, RCPACS Alumni,
        , Ex FullStack of <a href="https://bitsmith.tech/">Bitsmith</a>, and worked at
        {' '}<a href="https://bitsmith.tech">Bitsmith</a>
        . I like building things, learning new technologies, playing chess in my free time.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
