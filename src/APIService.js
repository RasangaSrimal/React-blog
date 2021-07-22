export default class APIService {

    static async UpdateArticle(article_id, body) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${article_id}`, {
            'method': 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        return await response.json();
    }

    static async AddArticle(body) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            'method': 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await response.json();
    }

    static DeleteArticle(article_id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${article_id}`, {
            'method': 'DELETE',
          });
    }
}