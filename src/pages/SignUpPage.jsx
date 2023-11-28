import { json, redirect } from "react-router-dom";
import SignUpForm from "../components/Auth/SignUpForm";
import { registerUser } from "../apis/auth";

export default function SignUpPage() {
  return <SignUpForm />;
}

export async function action({ request }) {
  const formData = await request.formData();

  const nickname = formData.get("nickname");
  const password = formData.get("password");

  if (nickname.trim() === "" || password.trim() === "") {
    throw json({ message: "아이디 비번을 입력하세요" }, { status: 422 });
  }

  const response = await registerUser({ nickname, password });

  if (response.status === 401) {
    throw json({ message: "이미 존재한다 이놈아!!" }, { status: 401 });
  }

  return redirect("/user/signin");
}
