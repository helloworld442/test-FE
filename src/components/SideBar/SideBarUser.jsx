import { useQuery } from "react-query";
import styled from "styled-components";
import { getUser } from "../../apis/user";

export default function SideBarUser() {
  const { isLoading, isError, data } = useQuery("user", getUser, {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 60 * 1000,
  });

  if (isLoading) return <div>asdf</div>;

  if (isError) return <div>asdf</div>;

  const { user } = data;

  return (
    <SidBarUserBox>
      <SidBarUserIcon />
      <SideBarUserText>{user.nickname}</SideBarUserText>
    </SidBarUserBox>
  );
}

const SidBarUserBox = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SidBarUserIcon = styled.span`
  float: left;
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #d9d9d9;
`;

const SideBarUserText = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;
