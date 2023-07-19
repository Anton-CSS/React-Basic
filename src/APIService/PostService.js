export class PostService{
    static async getAll(limit=10, page=1){
        return await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    }
}