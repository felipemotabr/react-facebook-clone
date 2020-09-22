import React from 'react';

import { Container, Title, Card, Avatar, Online } from './styles';

import ProfileImage from './../../Images/avatar.jpg';

const SidebarRight: React.FC = () => {
  return (
    <Container>
      <Title>Sponsored</Title>
      <Card>
      </Card>

      <Title>Birthday</Title>
      <Card className={'birthdays'}>
        <ul>
          <li>
            <div className={'icon'}></div>
            <div><strong>Hudson Batista</strong> and <strong>Rakel Caminha</strong> have birthdays today.</div></li>

        </ul>


      </Card>

      <Title>Contacts</Title>
      <Card className={'contacts'}>
        <ul>
          <li>
            <Avatar>
              <img src={ProfileImage} alt={''} />
              <Online />
            </Avatar>
            <span>Felipe Mota</span>
          </li>
          <li>
            <Avatar>
              <img src={ProfileImage} alt={''} />
            </Avatar>
            <span>Felipe Mota</span>
          </li>
          <li>
            <Avatar>
              <img src={ProfileImage} alt={''} />
            </Avatar>
            <span>Felipe Mota</span>
          </li>
        </ul>
      </Card>
    </Container>
  );
}

export default SidebarRight;