import styled from "styled-components";
import { useFetcher } from "react-router-dom";

export default function SignUpForm() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/user/signup">
      <SignUpFieldSet>
        <input type="text" name="nickname" />
        <input type="password" name="password" />
        <button type="submit">회원가입</button>
      </SignUpFieldSet>
    </fetcher.Form>
  );
}

const SignUpFieldSet = styled.fieldset`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
