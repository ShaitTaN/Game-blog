import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IPost } from "../../models/IPost";
import { postsActions } from "../../store/posts/posts.slice";

interface Props{
	post: IPost
}

const PostItem: FC<Props> = ({post}) => {
	const dispatch = useAppDispatch()
	const {favourites} = useAppSelector(state => state.posts)
	const {addFavourite, removeFavourite} = postsActions
	
	const onClickFavourite = () => {
		if(favourites.find(item => item.id === post.id)){
			dispatch(removeFavourite(post.id))
			return
		}
		dispatch(addFavourite(post))
	}

  return (
    <div className="posts__post">
      <div className={favourites.find(item => item.id === post.id) ? "posts__post-fav active" : "posts__post-fav"} onClick={onClickFavourite}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </div>
      <img
        className="posts__post-img"
        src={post.imageSrc}
      />
      <time className="posts__post-date" dateTime="2020-04-01">
        {post.data}
      </time>
      <h2 className="title">{post.title}</h2>
      <p className="posts__post-description">
        {post.description}
      </p>
      <a className="posts__post-btn" href="#">
        Read More
      </a>
    </div>
  );
};

export default PostItem;
