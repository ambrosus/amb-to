/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC } from 'react';

import SVG from 'react-svg';

import facebookIcon from 'assets/svg/fb-icon.svg';
import githubIcon from 'assets/svg/github-icon.svg';
import mediumIcon from 'assets/svg/medium-icon.svg';
import redditIcon from 'assets/svg/reddit-icon.svg';
import telegramIcon from 'assets/svg/telegram-icon.svg';
import twitterIcon from 'assets/svg/twitter-icon.svg';
import linkedinIcon from 'assets/svg/linkedin-icon.svg';
import './Footer.scss';
import convertStyles from '../../utils/convertStyles';
import { observer, inject } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';

// import bitcoinTalkIcon from 'assets/svg/bitcointalk-icon.svg';
// import youtubeIcon from 'assets/svg/youtube-icon.svg';

const socialsLinks = [
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
    url: 'linkedin.com/company/ambrosus-ecosystem/',
    title: 'Ambrosus LinkedIn',
    icon: linkedinIcon,
  },
  {
    url: 'https://www.reddit.com/r/AmbrosusEcosystem',
    title: 'Ambrosus Reddit',
    icon: redditIcon,
  },
  {
    url: 'https://blog.ambrosus.io',
    title: 'Ambrosus Medium',
    icon: mediumIcon,
  },
  {
    url: 'https://t.me/Ambrosus',
    title: 'Ambrosus Telegram',
    icon: telegramIcon,
  },
  {
    url: 'https://t.me/AmbrosusEcosystem',
    title: 'Ambrosus Ecosystem Telegram',
    icon: telegramIcon,
  },
  {
    url: 'https://twitter.com/AMB_Ecosystem',
    title: 'Ambrosus Twitter',
    icon: twitterIcon,
  },
  // {
  //   url: 'https://www.youtube.com/channel/UC27wKQU7KBgvtuTAOKD0BJg',
  //   title: 'Ambrosus Youtube',
  //   icon: youtubeIcon,
  // },
  // {
  //   url: 'https://bitcointalk.org/index.php?topic=2034826.0',
  //   title: 'Ambrosus at Bitcoin Talk',
  //   icon: bitcoinTalkIcon,
  // },
];

const Footer: SFC<{ AssetStore?: AssetStore }> = inject('AssetStore')(observer((props) => {

  const getFooterStyle = () => {
    try {
      // return convertStyles(props.AssetStore.brandings.footer) || {};
    } catch (error) {
      return {};
    }
  };

  const socials = socialsLinks.map((social, i) => {
    return (
      <li className='socials__list__link' key={i}>
        <a href={social.url} target='_blank' rel='noopener noreferrer'>
          <SVG wrapper='span' src={social.icon} />
        </a>
      </li>
    );
  });

  return (
    <div style={getFooterStyle()} className='footer'>
      <div className='wrapper'>
        <div className='copyright'>
          &copy; {new Date().getFullYear()} Ambrosus Network. All rights
          reserved.
        </div>

        <div className='socials'>
          <ul className='socials__list'>{socials}</ul>
        </div>

        <div className='contact'>
          <a href='mailto:info@ambrosus.com'>info@ambrosus.com</a>
        </div>
      </div>
    </div>
  );
}));

export default Footer;
