export class PostService{
    static async getAll(limit=10, page=1){
        return await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    }
    static async getByID(id){
        const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.json();
    }

    static async getComByID(id){
        const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response.json();
    }
}