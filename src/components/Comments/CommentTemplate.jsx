import styled from "styled-components";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function CommentTemplate() {
  return (
    <StCommentTemplate>
      <CommentForm />
      <CommentList />
    </StCommentTemplate>
  );
}

const StCommentTemplate = styled.div`
  margin: 36px 0;
`;
