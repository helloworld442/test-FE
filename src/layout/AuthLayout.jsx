import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function AuthLayout() {
  return (
    <StAuthLayout>
      <Outlet />
    </StAuthLayout>
  );
}

const StAuthLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
