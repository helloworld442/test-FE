import styled from "styled-components";
import { useFetcher } from "react-router-dom";

export default function SignInForm() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/user/signin">
      <SignInFieldSet>
        <input type="text" name="nickname" />
        <input type="password" name="password" />
        <button type="submit">로그인</button>
      </SignInFieldSet>
    </fetcher.Form>
  );
}

const SignInFieldSet = styled.fieldset`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
