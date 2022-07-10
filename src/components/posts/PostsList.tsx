import React, { FC } from "react";
import PostItem from "./PostItem";
import "./posts.scss";

const PostsList: FC = () => {
  return (
    <div className="posts">
      <PostItem/>
      <PostItem/>
    </div>
  );
};

export default PostsList;
