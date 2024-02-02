import { feeds } from "../assets/Data/feeds";
import { FeedCard } from "./FeedCard";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div>
        <div className="fs-1 fw-bold">Feed</div>
        <div className="mt-2">
          {feeds?.map((feed, index) => (
            <FeedCard
              key={index}
              title={feed.title}
              desc={feed.desc}
              feed_img={feed.feed_img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
