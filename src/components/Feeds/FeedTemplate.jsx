import styled from "styled-components";

export default function FeedTemplate({ children }) {
  return <StFeedTemplate>{children}</StFeedTemplate>;
}

const StFeedTemplate = styled.div`
  width: 850px;
  float: right;
`;
