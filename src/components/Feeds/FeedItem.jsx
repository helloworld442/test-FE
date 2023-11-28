import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FeedItem({ feed }) {
  return (
    <StFeedItem>
      <FeedTitle to={`/feeds/${feed.postId}`}>{feed.title}</FeedTitle>
      <FeedUser>{feed.nickname}</FeedUser>
    </StFeedItem>
  );
}

const StFeedItem = styled.li`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
`;

const FeedTitle = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const FeedUser = styled.h4`
  font-size: 0.8rem;
  font-weight: bold;
  color: #333;
`;
