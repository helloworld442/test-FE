import FeedForm from "../components/Feeds/FeedForm";
import FeedList from "../components/Feeds/FeedList";
import FeedTemplate from "../components/Feeds/FeedTemplate";

export default function FeedsPage() {
  return (
    <FeedTemplate>
      <FeedForm />
      <FeedList />
    </FeedTemplate>
  );
}
