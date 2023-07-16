import React, {useState} from 'react';
import Post from "./Post";

const PostList = ({posts, title, func}) => {
    return (
        <React.Fragment>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map(post => <Post key={post.id} post={post} func={func}/>)}
        </React.Fragment>
    );
};

export default PostList;