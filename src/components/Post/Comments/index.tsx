import React from 'react';

import { Container, Avatar, Content } from './styles';
import ProfileImage from './../../../Images/avatar.jpg';

const Comments: React.FC = () => {
  return (
    <Container>
      <div className={'divisor'}></div>
      <Avatar>
        <a href={'/'}>
          <img src={ProfileImage} alt={''} />
        </a>
      </Avatar>
      <Content>
        <div>
          <strong><a href={'/'}>Felipe Mota</a></strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum quibusdam consequuntur, alias veritatis iusto voluptates blanditiis.
          Aliquid, officia nulla saepe reiciendis consectetur</p>
        </div>
        <span>
          <a href={'/'}>Like</a> · <a href={'/'}>Reply</a> · <a href={'/'}>5h</a>
        </span>
      </Content>
    </Container>
  );
}

export default Comments;