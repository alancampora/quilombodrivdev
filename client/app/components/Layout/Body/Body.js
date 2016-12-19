import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../../Post/Post';

require('./Body.scss')

class Body extends React.Component {
    
    createPostsArray(){
        let key = 0;
        return this.props.posts.map(post => {
            key++;
            return <Post key={key} title={post.title} text={post.text}/>;})
    } 
    
    render() {
        const posts = this.createPostsArray(); 
        
        return ( 
            <div className='Body'>
                {posts} 
            </div>
        );
    }
}

export default Body;
