import React, { FC } from "react";
import { IPost } from "../../models/IPost";
import PostItem from "./PostItem";
import "./posts.scss";

interface Props {
  posts: IPost[];
}

const PostsList: FC<Props> = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem
          content={post.content}
          data={post.data}
          title={post.title}
          description={post.description}
          imageSrc={post.imageSrc}
          id={post.id}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostsList;
