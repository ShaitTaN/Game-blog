import React, { FC } from "react";
import Filter from "../../components/filter/Filter";
import PostsList from "../../components/posts/PostsList";
import { useGetPostsQuery } from "../../store/posts/posts.api";
import "./posts.scss";

const PostsPage: FC = () => {
	const { isLoading, isError, data } = useGetPostsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="postPage">
      <div className="container">
				<Filter/>
        {data && <PostsList posts={data} />}
      </div>
    </div>
  );
};

export default PostsPage;
