import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { deleteComment, updateComment } from "../../apis/comments";
import { useState } from "react";

export default function CommentItem({ comment }) {
  const { postId } = useParams();
  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState({ comment: comment.comment });

  const queryClient = useQueryClient();

  const updateMutation = useMutation(updateComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", postId]);
    },
  });

  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", postId]);
    },
  });

  const onClickUpdateButton = (e) => {
    e.preventDefault();

    updateMutation.mutate({ postId, commentId: comment.commentId, form });
  };

  const onClickDeleteButton = (e) => {
    e.preventDefault();

    deleteMutation.mutate({ postId, commentId: comment.commentId });
  };

  const onChangeUpdateInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onToggleUpdateButton = () => {
    setDisabled(!disabled);
  };

  console.log(comment);

  return (
    <StCommentItem>
      <CommentTitle
        disabled={disabled}
        name="comment"
        type="text"
        value={form.comment}
        onChange={onChangeUpdateInput}
      />
      {!disabled && (
        <CommentButton
          onClick={(e) => {
            onClickUpdateButton(e);
            onToggleUpdateButton();
          }}
        >
          완료
        </CommentButton>
      )}
      <CommentUser>{comment.nickname}</CommentUser>
      <CommentButton onClick={onToggleUpdateButton}>수정</CommentButton>
      <CommentButton onClick={onClickDeleteButton}>삭제</CommentButton>
    </StCommentItem>
  );
}

const StCommentItem = styled.li`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
`;

const CommentTitle = styled.input`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const CommentUser = styled.h4`
  font-size: 0.8rem;
  font-weight: bold;
  color: #333;
`;

const CommentButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  background: #d9d9d9;
  border: none;
  outline: none;
`;
