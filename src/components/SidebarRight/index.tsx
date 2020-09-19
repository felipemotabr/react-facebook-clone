import React from 'react';

import { Container, Title, Card, Avatar } from './styles';

import ProfileImage from './../../Images/avatar.jpg';

const SidebarRight: React.FC = () => {
  return (
    <Container>
      <Title>Sponsored</Title>
      <Card>
      </Card>

      <Title>Birthday</Title>
      <Card><strong>Hudson Batista</strong> and <strong>Rakel Caminha</strong> have birthdays today.

      </Card>

      <Title>Contacts</Title>
      <Card className={'contacts'}>
        <ul>
          <li>
            <Avatar>
              <img src={ProfileImage} />
            </Avatar>
            <span>Felipe Mota</span>
          </li>
        </ul>
      </Card>
    </Container>
  );
}

export default SidebarRight;