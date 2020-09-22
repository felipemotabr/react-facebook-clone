import React from 'react';

import { Container, TopBar, BottomBar } from './styles';

import ProfileImage from './../../Images/avatar.jpg';
import IconCovid from './../../Images/covid.png';
import IconPage from './../../Images/page.png';
import IconFriends from './../../Images/friends.png';
import IconMessenger from './../../Images/messenger.png';
import IconFundraisers from './../../Images/fundraisers.png';
import IconMarketplace from './../../Images/marketplace.png';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <ul>
          <a href={'/'}><li><img src={ProfileImage} alt={''} /> Felipe Mota</li></a>
          <a href={'/'}><li><img src={IconCovid} alt={''} /> COVID-19 Information Center</li></a>
          <a href={'/'}><li><img src={IconPage} alt={''} /> Pages</li></a>
          <a href={'/'}><li><img src={IconFriends} alt={''} /> Friends</li></a>
          <a href={'/'}><li><img src={IconMessenger} alt={''} /> Messenger</li></a>
          <a href={'/'}><li><img src={IconFundraisers} alt={''} /> Fundraisers</li></a>
          <a href={'/'}><li><img src={IconMarketplace} alt={''} /> Marketplace</li></a>
        </ul>
      </TopBar>

      <BottomBar>
        <ul>
          <li><a href={'/'}>Privacy</a></li>
          <li><a href={'/'}>Terms</a></li>
          <li><a href={'/'}>Advertising</a></li>
          <li><a href={'/'}>Ad Choices</a></li>
          <li><a href={'/'}>Cookies</a></li>
        </ul>
        Facebook © 2020
      </BottomBar>
    </Container>
  );
}

export default Sidebar;