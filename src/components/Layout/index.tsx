import React from 'react';

import { Container, Wrapper } from './styles';
import TopBar from './../Topbar';
import Posts from './../Post';
import CreatePost from './../CreatePost';
import SidebarLeft from './../SidebarLeft';
import SidebarRight from './../SidebarRight';
import Stories from './../Stories';

const PostItem = [
  {
    id: 1,
    name: "Hunter Matthew",
    imageProfile: "/image/avatar/milad-shams-YVGe3s1Qhfw-unsplash.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    totalComments: 23,
    totalShares: 10,
    comments: {
      id: 1,
      name: "Felipe Mota",
      imageProfile: "/image/avatar/hunter-matthews-X7gHHDPlp8U-unsplash.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam consequuntur, alias veritatis iusto voluptates blanditiis. Aliquid, officia nulla saepe reiciendis consectetur",
      reply: [{
        id: 1,
        name: "Felipe Mota",
        ImageProfile: "/image/avatar/hunter-matthews-X7gHHDPlp8U-unsplash.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam consequuntur, alias veritatis iusto voluptates blanditiis. Aliquid, officia nulla saepe reiciendis consectetur",
      }, {
        id: 1,
        name: "Felipe Mota",
        imageProfile: "/image/avatar/hunter-matthews-X7gHHDPlp8U-unsplash.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam consequuntur, alias veritatis iusto voluptates blanditiis. Aliquid, officia nulla saepe reiciendis consectetur",
      }, {
        id: 2,
        name: "Felipe Mota",
        imageProfile: "/image/avatar/hunter-matthews-X7gHHDPlp8U-unsplash.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam consequuntur, alias veritatis iusto voluptates blanditiis. Aliquid, officia nulla saepe reiciendis consectetur",
      }],
    },
  },
]

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SidebarLeft />
        <div className={'content'}>
          <Stories />
          <CreatePost />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
        <SidebarRight />
      </Wrapper>
    </Container>
  );
}

export default Layout;