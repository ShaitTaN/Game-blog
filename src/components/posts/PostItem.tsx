import React, { FC } from "react";
import { IPost } from "../../models/IPost";

interface Props{
	post: IPost
}

const PostItem: FC<IPost> = ({imageSrc,content,data,description,title}) => {
  return (
    <div className="posts__post">
      <div className="posts__post-fav">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </div>
      <img
        className="posts__post-img"
        src={imageSrc}
      />
      <time className="posts__post-date" dateTime="2020-04-01">
        {data}
      </time>
      <h2 className="title">{title}</h2>
      <p className="posts__post-description">
        {description}
      </p>
      <a className="posts__post-btn" href="#">
        Read More
      </a>
    </div>
  );
};

export default PostItem;
