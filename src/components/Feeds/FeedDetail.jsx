import styled from "styled-components";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { deletePost, updatePost } from "../../apis/post";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import { ReactComponent as Comment } from "../../assets/comment-solid.svg";
import { createLikes, getLikes } from "../../apis/like";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CommentTemplate from "../Comments/CommentTemplate";

export default function FeedDetail() {
  const { postId } = useParams();
  const { post } = useLoaderData();
  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState({ title: post.title, imageUrl: "" });

  const {
    isLoading,
    isError,
    data: like,
  } = useQuery(["like", postId], () => getLikes(postId));

  const queryClient = useQueryClient();

  const likeMutation = useMutation(createLikes, {
    onSuccess: () => {
      queryClient.invalidateQueries(["like", postId]);
    },
  });

  const onToggleUpdateButton = () => setDisabled(!disabled);

  const onClickUpdateButton = async (e) => {
    try {
      const data = await updatePost(postId, form);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDeleteButton = async (e) => {
    try {
      const data = await deletePost(postId, form);

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeUpdateInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onClickLikesButton = async (e) => {
    e.preventDefault();

    try {
      likeMutation.mutate(postId);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>asf</div>;

  if (isError) return <div>asdf</div>;

  return (
    <StFeedDetail>
      <FeedTitle
        name="title"
        value={form.title}
        disabled={disabled}
        onChange={onChangeUpdateInput}
      />
      {!disabled && (
        <FeedButton
          onClick={(e) => {
            onClickUpdateButton(e);
            onToggleUpdateButton();
          }}
        >
          완료
        </FeedButton>
      )}
      <FeedUser>{post.nickname}</FeedUser>
      <FeedButton onClick={onToggleUpdateButton}>수정</FeedButton>
      <FeedButton onClick={onClickDeleteButton}>삭제</FeedButton>
      <FeedIcon onClick={onClickLikesButton}>
        <Heart /> {like.likeCount}개
      </FeedIcon>
      <FeedIcon>
        <Comment />
      </FeedIcon>

      <CommentTemplate />
    </StFeedDetail>
  );
}

const StFeedDetail = styled.div`
  width: 850px;
  padding: 36px;
  box-sizing: border-box;
  height: auto;
  float: right;
`;

const FeedTitle = styled.input`
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
`;

const FeedUser = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const FeedButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  background: #d9d9d9;
  border: none;
  outline: none;
`;

const FeedIcon = styled.span`
  display: inline-block;
  margin: 14px;
  width: 1.6rem;
  height: 1.6rem;

  svg {
    width: 100%;
    hegiht: 100%;
    fill: #d9d9d9;
  }
`;
