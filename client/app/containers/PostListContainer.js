import { createStore } from 'redux';
import { connect } from 'react-redux';
import PostList from '../components/PostList/PostList';
import {fetchPosts} from '../actions/actions'


const mapDispatchToProps = (dispatch) => {
    return dispatch(fetchPosts);
}

const mapStateToProps = (state) => {
    return {posts : state.posts}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PostList);

