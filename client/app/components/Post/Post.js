import React, {propTypes} from 'react'; 

class Post extends  React.Component{
    render(){
        return (
            <div className='Post'>
                <h2>{this.props.title}</h2> 
                <p>{this.props.text}</p> 
            </div>
        );
    }
}


 /*
  *Post.propTypes={
  *    title: React.propTypes.string, 
  *    text: React.propTypes.string
  *}
  */
 

export default Post;
