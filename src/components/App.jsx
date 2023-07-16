import React, {useMemo, useState} from "react";
import PostList from "./PostList";
import PostForm from "./UI/PostForm";
import PostFilter from "./UI/PostFilter";
import Modal from "./UI/Modal";
import MyButton from "./UI/MyButton";

const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body:'Description'},
        {id: 2, title: 'Python', body:'Best'},
        {id: 3, title: 'Java', body:'Old'}
    ]);
    const [post, setPost] = useState({
        title: '',
        body: '',
        id: 3,
    });
   const [filter, setFilter] = useState({sort:'', query: ''});
   const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() =>{
        if(filter.sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
        } else{
            return posts
        }
    }, [filter.sort, posts]);
    
    const sortedAndSearchedPost = useMemo(() =>{
        console.log(filter.query)
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts])
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