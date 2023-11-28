import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { createComment } from "../../apis/comments";
import { useParams } from "react-router-dom";

export default function CommentForm() {
  const { postId } = useParams();
  const [form, setForm] = useState({ comment: "" });

  const queryClient = useQueryClient();
  const commentMutation = useMutation(createComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", postId]);
    },
  });

  const onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    commentMutation.mutate({ postId, form });

    setForm({ comment: "" });
  };

  return (
    <StCommentForm onSubmit={onSubmit}>
      <input
        type="text"
        name="comment"
        value={form.comment}
        onChange={onChange}
      />
      <button type="submit">제출</button>
    </StCommentForm>
  );
}

const StCommentForm = styled.form``;
