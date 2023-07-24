import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostService} from "../../APIService/PostService";
import useFetching from "../../hooks/useFetching";
import Loader from "../UI/Loader";

const PostById = () => {
    const {id} = useParams();
    const [postId, setPostId] = useState({});
    const [com, setCom] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () =>{
        const result = await PostService.getByID(id);
        setPostId(result)
    });
    const [fetchComById, isComLoading, errorCom] = useFetching(async () =>{
        const result = await PostService.getComByID(id);
        setCom(result)
    });


    useEffect(() =>{
        fetchComById(id);
        fetchPostById(id);
    }, [])
    return (
        <>
            {
                isLoading ? <Loader/> :
                    <div>
                        <h2>{postId.id}. {postId.title}</h2>
                        <p>{postId.body}</p>
                    </div>
            }
            <h2>Комментарии</h2>
            {isComLoading ? <Loader/> :<div>
                {
                    com.map(c=>
                        <div key={c.id} style={{marginTop: '15px'}}>
                            <h3>{c.email}</h3>
                            <p>{c.body}</p>
                        </div>
                    )
                }

            </div>}
        </>
    );
};

export default PostById;