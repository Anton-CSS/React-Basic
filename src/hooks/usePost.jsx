import {useMemo} from "react";

const useSortedPosts = (posts, sort) =>{
    return useMemo(() =>{
        if(sort){
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));
        } else{
            return posts
        }
    }, [sort, posts]);
};

const usePosts = (posts, sort, query) =>{
    const sortedPosts = useSortedPosts(posts, sort);
    return useMemo(() =>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts])
}

export default usePosts