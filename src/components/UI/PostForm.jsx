import React, {useState} from 'react';
import MyInput from "./MyInput";
import MyButton from "./MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        id: 3,
    });
    const addNewPost = (e) =>{
        e.preventDefault();
        setPost({...post, id: ++post.id});
        create(post)
        setPost({...post, body: '', title: ''})
    }
    return (
        <form>

            <MyInput type="text"
                     placeholder="Название поста"
                     value={post.title}
                     onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                value={post.body}
                placeholder="Описание поста"
                onChange={e=> setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;