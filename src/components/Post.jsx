import React from 'react';
import MyButton from "./UI/MyButton";

const Post = (props) => {
    const {id, title, body} = props.post;

    return (
        <div className="post">
            <div className="post__content">
                <strong>{id} {title}</strong>
                <div>{body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.func(id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default Post;