import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../../Post/Post';

class Body extends React.Component {
    
    createPostsArray(){
        let key = 0
        console.log('body' , this.props.posts)
        return this.props.posts.map(post => {
            key++
            return <Post key={key} title={post.title} text={post.description}/>})
    } 
    
    render() {
        const posts = this.createPostsArray() 
        console.log(posts) 
        
        return ( 
            <div>
                <h1> This is the body </h1>
                {posts} 
            </div>
        );
    }
}

export default Body;
