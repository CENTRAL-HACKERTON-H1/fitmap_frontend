import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const EditForm = styled.div`
  margin-top: 20px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #005555;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 200px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  resize: none;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #005555;
  }
`;

const SaveButton = styled(ActionButton)`
  background-color: #0055553b;
  color: #000;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const CancelButton = styled(ActionButton)`
  background-color: #0055553b;
  color: #000;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(() => {
    const savedLikeStatus = localStorage.getItem(`liked_${id}`);
    return savedLikeStatus === 'true';
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem('access');

  useEffect(() => {
    if (!accessToken) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://fitmap.store/board/${id}/`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPost(response.data);
        setLikeCount(response.data.likes || 0);
        setHasLiked(localStorage.getItem(`liked_${id}`) === 'true');
      } catch (error) {
        console.error('게시글 가져오기 오류:', error);
        setError('게시글을 불러오는 데 실패했습니다.');
      }
    };

    fetchPost();
  }, [id, accessToken]);

  const handleAddComment = async () => {
    if (comment.trim()) {
      try {
        const response = await axios.post(
          `https://fitmap.store/board/${id}/comment/`,
          { comment },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // 새 댓글 추가 후 상태 업데이트
        setPost((prevPost) => ({
          ...prevPost,
          comments: [...prevPost.comments, response.data], // 새 댓글 추가
        }));
        setComment(''); // 댓글 입력 필드 초기화
      } catch (error) {
        console.error('댓글 추가 오류:', error);
        setError('댓글 추가에 실패했습니다.');
      }
    }
  };

  const handleLike = async () => {
    if (!hasLiked) {
      try {
        await axios.post(
          `https://fitmap.store/board/${id}/like/`,
          {},
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setLikeCount(likeCount + 1);
        setHasLiked(true);
        localStorage.setItem(`liked_${id}`, 'true');
      } catch (error) {
        console.error('좋아요 오류:', error);
        setError('좋아요를 추가하는 데 실패했습니다.');
      }
    }
  };

  const handleEdit = () => {
    setEditTitle(post.title);
    setEditContent(post.body);
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `https://fitmap.store/board/${id}/`,
        { title: editTitle, body: editContent },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const response = await axios.get(`https://fitmap.store/board/${id}/`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setPost(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('게시글 수정 오류:', error);
      setError('게시글 수정에 실패했습니다.');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://fitmap.store/board/${id}/`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate('/community');
    } catch (error) {
      console.error('게시글 삭제 오류:', error);
      setError('게시글 삭제에 실패했습니다.');
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `https://fitmap.store/board/${id}/comment/${commentId}/`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setPost((prevPost) => ({
        ...prevPost,
        comments: prevPost.comments.filter(
          (comment) => comment.id !== commentId
        ),
      }));
    } catch (error) {
      console.error('댓글 삭제 오류:', error);
      setError('댓글 삭제에 실패했습니다.');
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <DetailWrapper>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isEditing ? (
        <EditForm>
          <TitleInput
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
          <ContentInput
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
          <SaveButton onClick={handleSaveEdit}>저장</SaveButton>
          <CancelButton onClick={handleCancelEdit}>취소</CancelButton>
        </EditForm>
      ) : (
        <>
          <Title>{post.title}</Title>
          <MetaInfo>
            <div>
              작성자: {post.nickname} | 작성일:{' '}
              {new Date(post.created_at).toLocaleDateString()}
            </div>
            <ButtonGroup>
              <LikeButton onClick={handleLike} disabled={hasLiked}>
                {hasLiked ? '❤️' : '👍🏻'} {likeCount}
              </LikeButton>
              <ActionButton onClick={handleEdit}>수정</ActionButton>
              <ActionButton onClick={handleDelete}>삭제</ActionButton>
            </ButtonGroup>
          </MetaInfo>
          <Content>{post.body}</Content>
          <CommentSection>
            <CommentList>
              {post.comments && post.comments.length > 0 ? (
                post.comments.map((comment) => (
                  <CommentItem key={comment.id}>
                    <strong>{comment.nickname} </strong> {comment.comment}
                    <ActionButton
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      삭제
                    </ActionButton>
                  </CommentItem>
                ))
              ) : (
                <p>댓글이 없습니다.</p>
              )}
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
        </>
      )}
    </DetailWrapper>
  );
};

export default PostDetail;
