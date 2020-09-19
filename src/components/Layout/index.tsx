import React from 'react';

import { Container, Wrapper } from './styles';
import TopBar from './../Topbar';
import Posts from './../Post';
import CreatePost from './../CreatePost';
import SidebarLeft from './../../components/SidebarLeft'
import SidebarRight from './../../components/SidebarRight'

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SidebarLeft />
        <div className={'content'}>
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