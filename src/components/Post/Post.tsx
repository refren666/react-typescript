import React, {FC} from 'react';
import {IPost} from "../../interfaces";

const Post:FC<{post: IPost}> = ({post}) => {
  const {id, title, userId, body} = post

  return (
    <div>
      <h1>Post #{id} from user #{userId}</h1>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
    </div>
  );
};

export default Post;