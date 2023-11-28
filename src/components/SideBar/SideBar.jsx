import styled from "styled-components";
import SideBarList from "./SideBarList";
import SideBarUser from "./SideBarUser";

export default function SideBar() {
  return (
    <SideBarAside>
      <SideBarUser />
      <SideBarList />
    </SideBarAside>
  );
}

const SideBarAside = styled.aside`
  float: left;
  width: 300px;
  height: 500px;
`;
