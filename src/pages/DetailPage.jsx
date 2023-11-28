import { json } from "react-router-dom";
import { getPost } from "../apis/post";
import FeedDetail from "../components/Feeds/FeedDetail";

export default function DetailPage() {
  return <FeedDetail />;
}

export async function loader({ params }) {
  const postId = params.postId;

  try {
    const feed = await getPost(postId);

    return feed;
  } catch (error) {
    throw json({ message: "존재하지 않는 게시글입니다." }, { status: 401 });
  }
}
