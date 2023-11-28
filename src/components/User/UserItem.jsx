import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { createFollow } from "../../apis/follow";

export default function UserItem({ user, follow }) {
  const queryClient = useQueryClient();

  const followingMutation = useMutation(createFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries("follow");
      queryClient.invalidateQueries(["follow", user.userId]);
    },
  });

  const onClickFollowingButton = (e) => {
    e.preventDefault();

    followingMutation.mutate({
      followingName: user.nickname,
      followingId: user.userId,
    });
  };

  return (
    <StUserItem>
      <UserItemTitle>{user.nickname}</UserItemTitle>
      <UserItemButton onClick={onClickFollowingButton}>
        {follow === "true" ? "팔로우 취소" : "팔로우"}
      </UserItemButton>
    </StUserItem>
  );
}

const StUserItem = styled.li`
  width: 100%;
  height: 100px;
  margin: 36px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #333;
  border-radius: 0.5rem;
`;

const UserItemTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
`;

const UserItemButton = styled.button`
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  background: #d9d9d9;
  border: none;
  outline: none;
`;
