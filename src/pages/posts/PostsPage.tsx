import React, { FC } from "react";
import PostsList from "../../components/posts/PostsList";
import "./posts.scss";

const PostsPage: FC = () => {
  return (
    <div className="postPage">
      <div className="container">
        <PostsList />
      </div>
    </div>
  );
};

export default PostsPage;
