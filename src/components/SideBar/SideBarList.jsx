import styled from "styled-components";

export default function SideBarList() {
  return (
    <SideBarMenu>
      <SideBarItem>프로필 수정</SideBarItem>
      <SideBarItem>친구 관리</SideBarItem>
      <SideBarItem>계정 설정</SideBarItem>
      <SideBarItem>다크 모드</SideBarItem>
    </SideBarMenu>
  );
}

const SideBarMenu = styled.ul`
  width: 100%;
  margin: 24px 0;
`;

const SideBarItem = styled.li`
  margin: 14px 0;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;
