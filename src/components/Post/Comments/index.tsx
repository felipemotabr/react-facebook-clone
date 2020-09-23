import React from 'react';

import { Container, Avatar, Content } from './styles';
// import ProfileImage from './../../../Images/avatar.jpg';

interface Props {
  data: {
    id: number;
    name: string;
    text: string;
    imageProfile: any;
    publicationDate: string;
  };
}

const Comments: React.FC<Props> = ({
  data
}) => {
  return (
    <Container>
      <div className={'divisor'}></div>
      <Avatar>
        <a href={'/'}>
          <img src={data.imageProfile} alt={''} />
        </a>
      </Avatar>
      <Content>
        <div>
          <strong><a href={'/'}>{data.name}</a></strong>
          <p>{data.text}</p>
        </div>
        <span>
          <a href={'/'}>Like</a> · <a href={'/'}>Reply</a> · <a href={'/'}>{data.publicationDate}</a>
        </span>
      </Content>
    </Container>
  );
}

export default Comments;