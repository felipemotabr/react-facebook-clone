import React from 'react';

import { Container, Title, Card, Avatar, Online } from './styles';

import Ads from './Ads'

const Contacts = [
  {
    id: 1,
    name: 'Omid Armin',
    imagem_profile: '/image/avatar/omid-armin-DeQ7YsiD6v8-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Karsten Winegeart',
    imagem_profile: '/image/avatar/karsten-winegeart-KSqfFHtHpro-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Milad Shams',
    imagem_profile: '/image/avatar/milad-shams-YVGe3s1Qhfw-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Hunter Matthews',
    imagem_profile: '/image/avatar/hunter-matthews-X7gHHDPlp8U-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Stephan Louis',
    imagem_profile: '/image/avatar/stephan-louis-VXzH2o3olpA-unsplash.jpg',
  },
]

const SidebarRight: React.FC = () => {
  return (
    <Container>
      <Title>Sponsored</Title>
      <Card>
        <Ads />
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
          {Contacts.map(Contact => {
            return (
              <li>
                <Avatar>
                  <img src={Contact.imagem_profile} alt={''} />
                  <Online />
                </Avatar>
                <span>{Contact.name}</span>
              </li>
            );
          })}
        </ul>
      </Card>
    </Container>
  );
}

export default SidebarRight;