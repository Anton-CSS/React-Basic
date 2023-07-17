import React, {useEffect, useMemo, useState} from "react";
import PostList from "./PostList";
import PostForm from "./UI/PostForm";
import PostFilter from "./UI/PostFilter";
import Modal from "./UI/Modal";
import MyButton from "./UI/MyButton";
import usePosts from "../hooks/usePost";
import {PostService} from "../APIService/PostService";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query: ''});
    const [modal, setModal] = useState(false);
    const  fetchPosts = async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    }
    useEffect(() =>{
        fetchPosts();
    },[])

    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
    const createPost = (newPost) =>{
        setPosts([...posts, newPost]);
        setModal(!modal);
    }

    const removePost = (id) =>{
        setPosts(posts.filter(p => p.id !== id))
    };



    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={()=> setModal(!modal)}>Создать пользователя</MyButton>
            <MyButton style={{marginLeft: "30px"}} onClick={() => fetchPosts()}> Получить посты</MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create = {createPost}/>
            </Modal>

            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                (sortedAndSearchedPost.length !==0) ? <PostList posts={sortedAndSearchedPost} title={"Список постов"} func={removePost}/> : <h2 className="empty">Посты не найдены</h2>
            }
        </div>
    );
};

export default App;