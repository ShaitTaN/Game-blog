import React, { FC } from "react";
import Filter from "../../components/filter/Filter";
import PostsList from "../../components/posts/PostsList";
import "./posts.scss";

const PostsPage: FC = () => {
  return (
    <div className="postPage">
      <div className="container">
				<Filter/>
        <PostsList />
      </div>
    </div>
  );
};

export default PostsPage;
