import React, { FC } from "react";
import PostsList from "../../components/posts/PostsList";
import Sidebar from "../../components/sidebar/Sidebar";
import { useGetPostsQuery } from "../../store/posts/posts.api";
import "./home.scss";

const HomePage: FC = () => {
  // TODO: Error handle
  const { isLoading, isError, data } = useGetPostsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <h1>Welcome to game blog HEADHOT</h1>
      <div className="container">
        {data && <PostsList posts={data.slice(0,2)} />}
        {data && <Sidebar posts={data.slice(data.length-5).reverse()} />}
      </div>
    </div>
  );
};

export default HomePage;
