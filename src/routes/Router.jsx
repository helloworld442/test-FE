import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import FeedsPage from "../pages/FeedsPage";
import UsersPage from "../pages/UsersPage";
import AuthLayout from "../layout/AuthLayout";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DetailPage from "../pages/DetailPage";
import { loader as detailLoader } from "../pages/DetailPage";
import { action as signUpAction } from "../pages/SignUpPage";
import { action as signInAction } from "../pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <FeedsPage />,
        errorElement: <div>asdf</div>,
      },
      {
        path: "/feeds/:postId",
        element: <DetailPage />,
        loader: detailLoader,
      },
    ],
  },
  {
    path: "/user",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
        errorElement: <div>error</div>,
        action: signInAction,
      },
      {
        path: "signup",
        element: <SignUpPage />,
        errorElement: <div>error</div>,
        action: signUpAction,
      },
      {
        path: "userlist",
        element: <UsersPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
