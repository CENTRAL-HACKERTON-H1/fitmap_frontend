import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const PostListWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const PostItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const PostContent = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const CreatedAt = styled.p`
  margin: 5px 0 0;
  color: #555;
  font-size: 14px;
`;

const CommunityTitle = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
`;

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://fitmap.store/board/', {
          withCredentials: true
        });
        setPosts(response.data);
      } catch (error) {
        console.error('게시글 목록 가져오기 오류:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostListWrapper>
      <CommunityTitle>Community</CommunityTitle>
      {posts.map(post => (
        <PostItem key={post.id}>
          <PostContent>
            <Link to={`/community/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Title>{post.title}</Title>
              <CreatedAt>작성일: {new Date(post.created_at).toLocaleDateString()}</CreatedAt>
            </Link>
          </PostContent>
        </PostItem>
      ))}
    </PostListWrapper>
  );
};

export default PostList;
