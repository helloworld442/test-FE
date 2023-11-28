import { useQuery } from "react-query";
import styled from "styled-components";
import { getPosts } from "../../apis/post";
import FeedItem from "./FeedItem";

export default function FeedList() {
  const { isLoading, isError, data } = useQuery("feed", getPosts, {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 60 * 1000,
    retry: 0,
  });

  if (isError) return <div>asdf</div>;

  if (isLoading) return <div>asdf</div>;

  const { posts } = data;

  return (
    <StFeedList>
      {posts.map((feed) => (
        <FeedItem key={feed.postId} feed={feed} />
      ))}
    </StFeedList>
  );
}

const StFeedList = styled.ul`
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
