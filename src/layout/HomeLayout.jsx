import styled from "styled-components";
import Header from "../components/@common/Header";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <Layout>
      <Header />
      <SideBar />
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
  position: fixed;
  left: 50%;
  width: 1200px;
  height: auto;
  transform: translateX(-50%);
`;
