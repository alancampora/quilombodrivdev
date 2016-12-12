export default class Api {
    static fetchPosts() {
        //TODO: read md posts.
        return Promise.resolve([{
            id: 1,
            title: 'first post',
            description: 'dah dah dah first post yeah dah dah blah'
        }, {
            id: 2,
            title: 'second post',
            description: 'dah dah dah second post yeah dah dah blah'
        }])

    }

}
