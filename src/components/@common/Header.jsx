import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <HeaderIcon>검색</HeaderIcon>
      <HeaderTitle>Test</HeaderTitle>
      <HeaderIcon>알림 </HeaderIcon>
    </StHeader>
  );
}

const StHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 48px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const HeaderIcon = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;
