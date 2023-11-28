import { json, redirect } from "react-router-dom";
import { loginUser } from "../apis/auth";
import SignInForm from "../components/Auth/SignInForm";

export default function SignInPage() {
  return <SignInForm />;
}

export async function action({ request }) {
  const formData = await request.formData();

  const nickname = formData.get("nickname");
  const password = formData.get("password");

  if (nickname.trim() === "" || password.trim() === "") {
    throw json({ message: "아이디 비번을 입력하세요" }, { status: 422 });
  }

  const response = await loginUser({ nickname, password });

  if (response.status === 401) {
    throw json({ message: "존재하지 않는 유저입니다." }, { status: 401 });
  }

  return redirect("/");
}
