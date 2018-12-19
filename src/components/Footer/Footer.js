import React, { Component } from 'react';

import SVG from 'react-svg';

import bitcoinTalkIcon from 'assets/icons/bitcointalk-icon.svg';
import facebookIcon from 'assets/icons/fb-icon.svg';
import githubIcon from 'assets/icons/github-icon.svg';
import mediumIcon from 'assets/icons/medium-icon.svg';
import redditIcon from 'assets/icons/reddit-icon.svg';
import telegramIcon from 'assets/icons/telegram-icon.svg';
import twitterIcon from 'assets/icons/twitter-icon.svg';
import youtubeIcon from 'assets/icons/youtube-icon.svg';

import './style.scss';

const socialsLinks = [
  {
    url: 'https://bitcointalk.org/index.php?topic=2034826.0',
    title: 'Ambrosus at Bitcoin Talk',
    icon: bitcoinTalkIcon,
  },
  {
    url: 'https://www.facebook.com/ambrosusAMB',
    title: 'Ambrosus Facebook Group',
    icon: facebookIcon,
  },
  {
    url: 'https://github.com/ambrosus',
    title: 'Ambrosus Github',
    icon: githubIcon,
  },
  {
    url: 'https://www.reddit.com/r/ambrosus',
    title: 'Ambrosus Reddit',
    icon: redditIcon,
  },
  {
    url: 'https://blog.ambrosus.com',
    title: 'Ambrosus Medium',
    icon: mediumIcon,
  },
  {
    url: 'https://t.me/ambrosuschat',
    title: 'Ambrosus Telegram',
    icon: telegramIcon,
  },
  {
    url: 'https://twitter.com/AmbrosusAMB',
    title: 'Ambrosus Twitter',
    icon: twitterIcon,
  },
  {
    url: 'https://www.youtube.com/channel/UC27wKQU7KBgvtuTAOKD0BJg',
    title: 'Ambrosus Youtube',
    icon: youtubeIcon,
  },
];

class Footer extends Component {

  render() {
    const socials = socialsLinks.map((social, i) => {
      return (
        <li className="footer__socials__list__link" key={i}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <SVG src={social.icon} />
          </a>
        </li>
      );
    });

    return (
      <div className="footer">
        <div className="wrapper">

          <div className="footer__copyright">&copy; {new Date().getFullYear()} Ambrosus Network. All rights reserved.</div>

          <div className="footer__socials">
            <ul className="footer__socials__list">
              {socials}
            </ul>
          </div>

          <div className="footer__contact">
            <a href="mailto:info@ambrosus.com">info@ambrosus.com</a>
          </div>

        </div>
      </div>
    );
  }

}


export default Footer;
