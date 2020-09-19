import React from 'react';

import {
  Container,
  Left,
  Right,
  FormSearch,
  IconSearch,
  Menu,
  IconHome,
  IconHalfStaff,
  IconDisplay,
  IconMarket,
  IconGroups,
  Profile,
  Avatar,
  IconPlus,
  IconMessage,
  IconBell,
  IconArrow,
  NotificationBadge
} from './styles';

import ReactTooltip from 'react-tooltip';

import Logo from './../../Images/Facebook_Logo.png';
import ProfileImage from './../../Images/avatar.jpg';

const Topbar: React.FC = () => {
  return (
    <Container>

      <Left>
        <img src={Logo} alt='' width={40} />
        <FormSearch>
          <IconSearch />
          <input placeholder={'Search Facebook'} />
        </FormSearch>
      </Left>

      <Menu>
        <ul>
          <li data-tip data-for='home' className={'active'}>
            <span>
              <IconHome />
              <ReactTooltip id='home' effect='solid' className='Tooltip'>
                <span>Home</span>
              </ReactTooltip>
            </span>
          </li>
          <li data-tip data-for='HalfStaff'>
            <span>
              <IconHalfStaff />
              <NotificationBadge>9+</NotificationBadge>
              <ReactTooltip id='HalfStaff' effect='solid' className='Tooltip'>
                <span>Pages</span>
              </ReactTooltip>
            </span>
          </li>
          <li data-tip data-for='Display'>
            <span>
              <IconDisplay />
              <NotificationBadge>9+</NotificationBadge>
              <ReactTooltip id='Display' effect='solid' className='Tooltip'>
                <span>Watch</span>
              </ReactTooltip>
            </span>
          </li>
          <li data-tip data-for='Market'>
            <span>
              <IconMarket />
              <ReactTooltip id='Market' effect='solid' className='Tooltip'>
                <span>Marketplace</span>
              </ReactTooltip>
            </span>
          </li>
          <li data-tip data-for='Groups'>
            <span>
              <IconGroups />
              <ReactTooltip id='Groups' effect='solid' className='Tooltip'>
                <span>Groups</span>
              </ReactTooltip>
            </span>
          </li>
        </ul>
      </Menu>

      <Right>
        <Profile>
          <Avatar>
            <img src={ProfileImage} alt='' />
          </Avatar>
          Felipe
        </Profile>
        <ul>
          <li data-tip data-for='Plus'>
            <IconPlus />
            <ReactTooltip id='Plus' effect='solid' className='Tooltip'>
              <span>Create</span>
            </ReactTooltip>
          </li>
          <li data-tip data-for='Messenger'>
            <IconMessage />
            <ReactTooltip id='Messenger' effect='solid' className='Tooltip'>
              <span>Messenger</span>
            </ReactTooltip>
          </li>
          <li data-tip data-for='Bell'>
            <IconBell />
            <NotificationBadge className="Badge">9+</NotificationBadge>
            <ReactTooltip id='Bell' effect='solid' className='Tooltip'>
              <span>Notifications</span>
            </ReactTooltip>
          </li>
          <li data-tip data-for='Arrow'><IconArrow />
            <ReactTooltip id='Arrow' effect='solid' className='Tooltip'>
              <span>Account</span>
            </ReactTooltip>
          </li>
        </ul>
      </Right>
    </Container >
  );
}

export default Topbar;