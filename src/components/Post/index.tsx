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


import IconLike from './../../Images/like.svg'
import IconAngry from './../../Images/angry.svg'
import IconCare from './../../Images/care.svg'
import IconHaha from './../../Images/haha.svg'
import IconLove from './../../Images/love.svg'
import IconSad from './../../Images/sad.svg'
import IconWow from './../../Images/wow.svg'

import Comments from './Comments'
import WriteComment from './WriteComment'

interface CommentReply {
  id: number;
  name: string;
  imageProfile: any;
  text: string;
}

interface Comment {
  id: number;
  name: string;
  imageProfile: any;
  text: string;
  replies: CommentReply[];
}

interface Props {
  name: string;
  imageProfile: string;
  imagePost?: string;
  text: string;
  reaturedReactionName: string;
  totalComments: number;
  totalShares: number;
  totalReact: number;
  comments: Comment[];
}

const Post: React.FC<Props> = ({
  name,
  imageProfile,
  imagePost,
  text,
  reaturedReactionName,
  totalComments,
  totalShares,
  totalReact,
  comments
}) => {
  return (
    <Container>
      <Header>
        <img src={imageProfile} alt='' />
        <div className={'info'}>
          <span>{name}</span>
          <div className="time">8 h · <IconPublic /></div>
        </div>
      </Header >
      <Text>
        {text}
      </Text>
      {imagePost && (
        <CardImage><img src={imagePost} alt="" /></CardImage>
      )}
      <Footer>
        <Reaction>
          <ul>
            <li><img src={IconLike} alt="" /></li>
            <li><img src={IconLove} alt="" /></li>
            <li><img src={IconHaha} alt="" /></li>
            <li><a href="{/}">{reaturedReactionName} e outras {totalReact} pessoas</a></li>
          </ul>
        </Reaction>
        <Status>
          <ul>
            <li><a href="{/}">{totalComments} Comments</a></li>
            <li><a href="{/}">{totalShares} Shares</a></li>
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

      {
        // main comment
        comments.map((comment: Comment) => (
          <>
            <Comments data={comment} />
            {
              // answers from comments
              comment.replies.map((reply: CommentReply) => (
                <ReplyComment>
                  <span>
                  </span>
                  <span>
                    <Comments data={reply} />
                  </span>
                </ReplyComment>
              ))
            }
          </>
        ))
      }

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