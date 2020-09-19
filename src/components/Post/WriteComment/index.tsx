import React from 'react';

import { Container, Avatar, Content, IconSmile, IconCamera, IconGif } from './styles';
import ReactTooltip from 'react-tooltip';


import ProfileImage from './../../../Images/avatar.jpg';

const WriteComment: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img src={ProfileImage} alt={''} />
      </Avatar>
      <Content>
        <input placeholder={'Writte a comment...'} />
        <div data-tip data-for='Smile'>
          <IconSmile />
          <ReactTooltip id='Smile' effect='solid' className='Tooltip'>
            <span>Insert an emoji</span>
          </ReactTooltip>
        </div>
        <div data-tip data-for='Camera'>
          <IconCamera />
          <ReactTooltip id='Camera' effect='solid' className='Tooltip'>
            <span>Attach a photo or video</span>
          </ReactTooltip>
        </div>
        <div data-tip data-for='Gif'>
          <IconGif />
          <ReactTooltip id='Gif' effect='solid' className='Tooltip'>
            <span>Post a GIF</span>
          </ReactTooltip>
        </div>

      </Content>
    </Container>
  );
}

export default WriteComment;