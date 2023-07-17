import React, {useState} from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, func}) => {
    return (
        <React.Fragment>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map(post => <CSSTransition key={post.id} timeout={500} classNames="item"><Post post={post} func={func}/></CSSTransition>)}
            </TransitionGroup>

        </React.Fragment>
    );
};

export default PostList;