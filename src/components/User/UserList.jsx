import { useQueries } from "react-query";
import styled from "styled-components";
import { getUsers } from "../../apis/user";
import UserItem from "./UserItem";
import { getFollow } from "../../apis/follow";

export default function UserList() {
  const results = useQueries([
    {
      queryKey: "users",
      queryFn: getUsers,
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 60 * 1000,
      retry: 0,
      refetchOnMount: false,
    },

    {
      queryKey: "follow",
      queryFn: getFollow,
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 60 * 1000,
      retry: 0,
      refetchOnMount: false,
    },
  ]);

  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);
  const data = results.map((result) => result.data);

  if (isError) return <div>asdf</div>;

  if (isLoading) return <div>asdf</div>;

  const [userData, followData] = data;

  const { users } = userData;
  const { following } = followData;

  return (
    <StUserList>
      {users.map((user) => {
        if (following.includes(user.userId)) {
          return <UserItem key={user.userId} user={user} follow="true" />;
        }

        return <UserItem key={user.userId} user={user} follow="false" />;
      })}
    </StUserList>
  );
}

const StUserList = styled.ul`
  position: fixed;
  left: 50%;
  width: 1000px;
  height: auto;
  transform: translateX(-50%);
`;
