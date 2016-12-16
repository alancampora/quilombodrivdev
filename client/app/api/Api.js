export default class Api {
    static fetchPosts() {
            return fetch('http://localhost:8089/qdd/posts/getall').then(
                function(response) {
                    return response.json()
                }).catch(function(error) {
                return error;
            });
        }
        //goto;
        //return Promise.resolve([{
        //id: 1,
        //title: 'first post',
        //description: 'dah dah dah first post yeah dah dah blah'
        //}, {
        //id: 2,
        //title: 'second post',
        //description: 'dah dah dah second post yeah dah dah blah'
        //}])

}
