import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getComments } from "../../apis/comments";
import styled from "styled-components";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const { postId } = useParams();
  const { isLoading, isError, data } = useQuery(
    ["comment", postId],
    () => getComments(postId),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 60 * 1000,
    }
  );

  if (isLoading) return <div>asdf</div>;

  if (isError) return <div>asdf</div>;

  const { comments } = data;

  return (
    <StCommentList>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </StCommentList>
  );
}

const StCommentList = styled.ul`
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;
