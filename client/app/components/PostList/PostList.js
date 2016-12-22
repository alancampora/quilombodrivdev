import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../Post/Post';

require('./PostList')
class PostList extends React.Component {
    
    createPostsArray(){
        let key = 0;
        return this.props.posts.map(post => {
            key++;
            return <Post key={key} title={post.title} text={post.text}/>;})
    } 
    
    render() {
        const posts = this.createPostsArray(); 
        
        return ( 
            <div className='PostList'>
                {posts} 
            </div>
        );
    }
}

export default PostList;
