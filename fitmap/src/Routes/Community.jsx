import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Sidebar, Content, Button } from './Community.styled';
import PostList from '../Community/PostList';
import NewPost from '../Community/NewPost';
import Events from '../Community/Events';
import NewEvent from '../Community/NewEvent';
import EventDetail from '../Community/EventDetail';
import PostDetail from '../Community/PostDetail';

const Community = () => {
  return (
    <Container>
      <Sidebar>
        <Link to="new-post"><Button>게시글 작성</Button></Link>
        <Link to="events"><Button>이벤트</Button></Link>
      </Sidebar>
      <Content>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="new-post" element={<NewPost />} />
          <Route path="events" element={<Events />} />
          <Route path="events/new" element={<NewEvent />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Routes>
      </Content>
    </Container>
  );
};

export default Community;
