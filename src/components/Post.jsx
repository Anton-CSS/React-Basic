import React from 'react';
import MyButton from "./UI/MyButton";
import {useNavigate} from "react-router-dom";



const Post = (props) => {
    const {id, title, body} = props.post;
    const navigate = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong>{id} {title}</strong>
                <div>{body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${id}`)}>Open</MyButton>
                <MyButton onClick={() => props.func(id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default Post;