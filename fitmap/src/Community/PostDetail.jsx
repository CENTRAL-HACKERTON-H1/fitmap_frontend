import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const DetailWrapper = styled.div`
  padding: 25px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  background-color: #0055553b;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-left: 10px;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const LikeButton = styled(ActionButton)`
  margin-left: 0;
`;

const CommentSection = styled.div``;

const CommentList = styled.div`
  margin-top: 20px;
`;

const CommentItem = styled.div`
  border-top: 1px solid #eee;
  padding: 10px 0;
  color: #555;
`;

const AddComment = styled.div`
  display: flex;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const CommentButton = styled(ActionButton)`
  margin: 0;
`;

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://fitmap.store/board/${id}/`, {
          withCredentials: true // 쿠키를 함께 전송
        });
        setPost(response.data);
        setLikeCount(response.data.likes || 0); // 기본값 0 설정
      } catch (error) {
        console.error('게시글 가져오기 오류:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleAddComment = async () => {
    if (comment.trim()) {
      try {
        const response = await axios.post(
          `http://fitmap.store/board/${id}/comments/`, 
          { comment },
          { withCredentials: true }
        );
        setPost(prevPost => ({
          ...prevPost,
          comments: [...prevPost.comments, response.data]
        }));
        setComment('');
      } catch (error) {
        console.error('댓글 추가 오류:', error);
      }
    }
  };

  const handleLike = async () => {
    try {
      await axios.post(
        `http://fitmap.store/board/${id}/like/`, 
        {}, 
        { withCredentials: true }
      );
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.error('좋아요 오류:', error);
    }
  };

  const handleEdit = () => {
    // 수정 로직 추가
    console.log("Edit post", id);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://fitmap.store/board/${id}/`, {
        withCredentials: true
      });
      // 삭제 후 리디렉션 또는 상태 변경 필요
      console.log("Delete post", id);
    } catch (error) {
      console.error('게시글 삭제 오류:', error);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <DetailWrapper>
      <Title>{post.title}</Title>
      <MetaInfo>
        <div>
          작성자: {post.nickname} | 작성일: {new Date(post.created_at).toLocaleDateString()}
        </div>
        <ButtonGroup>
          <LikeButton onClick={handleLike}>👍🏻 {likeCount}</LikeButton>
          <ActionButton onClick={handleEdit}>수정</ActionButton>
          <ActionButton onClick={handleDelete}>삭제</ActionButton>
        </ButtonGroup>
      </MetaInfo>
      <Content>{post.body}</Content>
      <CommentSection>
        <CommentList>
          {post.comments.map(comment => (
            <CommentItem key={comment.id}>
              <strong>{comment.nickname}:</strong> {comment.comment}
            </CommentItem>
          ))}
        </CommentList>
        <AddComment>
          <CommentInput
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <CommentButton onClick={handleAddComment}>등록</CommentButton>
        </AddComment>
      </CommentSection>
    </DetailWrapper>
  );
};

export default PostDetail;
