import React from 'react';

import { Container, Avatar, Content } from './styles';

import ProfileImage from './../../Images/avatar.jpg';

const CreatePost: React.FC = () => {
  return (
    <Container>
      <div>
        <Avatar>
          <img src={ProfileImage} alt={'ProfileImage'} />
        </Avatar>
        <Content>
          <input placeholder={"What's on your mind, Felipe?"} />
        </Content>
      </div>
      <div className={'divisor'}></div>
      <div className={'layout'}>
        <span>
          <div className={'icon live'}></div>
          Live</span>
        <span>
          <div className={'icon photo'}></div>
          Photo/Video</span>
        <span>
          <div className={'icon smile'}></div>
          Feeling/Activity</span>
      </div>
    </Container>
  );
}

export default CreatePost;