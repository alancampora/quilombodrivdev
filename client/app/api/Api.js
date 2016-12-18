export default class Api {
    static fetchPosts() {
        let getAllUrl = process.env.API_HOST+'/qdd/posts/getall'; 
        return fetch(getAllUrl).then(
            function(response) {
                return response.json()
            }).catch(function(error) {
            return error;
        });
    }
}
