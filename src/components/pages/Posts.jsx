import React, {useEffect, useState} from "react";
import PostList from "../PostList";
import PostForm from "../UI/PostForm";
import PostFilter from "../UI/PostFilter";
import Modal from "../UI/Modal";
import MyButton from "../UI/MyButton";
import usePosts from "../../hooks/usePost";
import {PostService} from "../../APIService/PostService";
import Loader from "../UI/Loader";
import useFetching from "../../hooks/useFetching";
import getPages from "../../utils/pages";
import Pagination from "../UI/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);



    const [fetchPosts, isPostLoading, postError] = useFetching(async () =>{
        const response = await PostService.getAll(limit, page);
        const data =  await response.json()
        setPosts(data);
        const totalCount = +response.headers.get('X-Total-Count');
        setTotalPages(getPages(totalCount, limit));
    });

    useEffect(() =>{
        fetchPosts();
    },[page])

    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
    const createPost = (newPost) =>{
        setPosts([...posts, newPost]);
        setModal(!modal);
    }

    const removePost = (id) =>{
        setPosts(posts.filter(p => p.id !== id))
    };

    const changePage = (page) =>{
        setPage(page)
    }

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
                postError && <h1>Произошла ошибка: {postError}</h1>
            }
            {
                isPostLoading ?
                    <div className={'loader_box'}><Loader/></div>
                    :
                    (sortedAndSearchedPost.length !==0) ? (<React.Fragment><PostList posts={sortedAndSearchedPost} title={"Список постов"} func={removePost}/>
                        <Pagination totalPages={totalPages} changePage={changePage} page={page}/>
                    </React.Fragment> ): <h2 className="empty">Посты не найдены</h2>
            }
        </div>
    );
};

export default Posts;