import React, { FC } from "react";

const PostItem: FC = () => {
  return (
    <div className="posts__post">
      <div className="posts__post-fav">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </div>
      <img
        className="posts__post-img"
        src="https://cdn.vox-cdn.com/thumbor/NYY78d4Jip27Tu3J0u5yNdDyQ9g=/0x0:5160x3836/1200x800/filters:focal(3536x933:4360x1757)/cdn.vox-cdn.com/uploads/chorus_image/image/70956082/Cover_1.0.jpg"
      />
      <time className="posts__post-date" dateTime="2020-04-01">
        1 April 2020
      </time>
      <h2 className="title">The best games of 2020</h2>
      <p className="posts__post-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        dolorem voluptate quos harum corrupti voluptates nulla amet saepe, et
        officiis?
      </p>
      <a className="posts__post-btn" href="#">
        Read More
      </a>
    </div>
  );
};

export default PostItem;
