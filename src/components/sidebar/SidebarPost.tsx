import React, { FC } from "react";
import { IPost } from "../../models/IPost";

interface Props{
	post: IPost
}

const SidebarPost: FC<Props> = ({post}) => {
  const bgImg = {
    backgroundImage:
      `url(${post.imageSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="sidebar__post">
      <div className="sidebar__post-info">
        <div className="sidebar__post-img" style={bgImg} />
      <h3 className="title">{post.title}</h3>
      </div>
        <time>{post.data}</time>
    </div>
  );
};

export default SidebarPost;
