import React from 'react';

import {
  Container,
  Header,
  Text,
  IconPublic,
  CardImage,
  Footer,
  Reaction,
  Status,
  Action,
  IconLikeAction,
  IconComment,
  IconShared,
  CommentStatic,
  ReplyComment
} from './styles';

import logo from './../../Images/Facebook_Logo.png';
import IconLike from './../../Images/like.svg'
import IconAngry from './../../Images/angry.svg'
import IconCare from './../../Images/care.svg'
import IconHaha from './../../Images/haha.svg'
import IconLove from './../../Images/love.svg'
import IconSad from './../../Images/sad.svg'
import IconWow from './../../Images/wow.svg'

import Comments from './Comments'
import WriteComment from './WriteComment'

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt='' />
        <div className={'info'}>
          <span>Felipe Mota</span>
          <div className="time">8 h · <IconPublic /></div>
        </div>
      </Header >
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
      <CardImage>

      </CardImage>
      <Footer>
        <Reaction>
          <ul>
            <li><img src={IconLike} alt="" /></li>
            <li><img src={IconLove} alt="" /></li>
            <li><img src={IconHaha} alt="" /></li>
            <li><a href="{/}">Felipe Mota e outras 48 pessoas</a></li>
          </ul>
        </Reaction>
        <Status>
          <ul>
            <li><a href="{/}">203 Comments</a></li>
            <li><a href="{/}">20 Shares</a></li>
          </ul>
        </Status>
      </Footer>
      <Action>
        <div className={'divisor'}></div>
        <div className={'action'}>
          <span><IconLikeAction /> Like</span>
          <span><IconComment /> Comment</span>
          <span><IconShared /> Share</span>
        </div>
        <div className={'divisor'}></div>
      </Action>
      <WriteComment />

      <Comments />

      <ReplyComment>
        <span>
        </span>
        <span>
          <Comments />
          <Comments />
        </span>
      </ReplyComment>
      <CommentStatic>
        <div>
          <a href={'/'}>View more comments</a>
        </div>
        <div>
          2 of 10
        </div>
      </CommentStatic>
    </Container >
  );
}

export default Post;