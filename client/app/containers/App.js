import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Body from '../components/Layout/Body/Body'
import {fecthPosts} from '../actions/actions'

class App extends React.Component {

    componentDidMount() {
        dispatch(fetchPosts())
    }

    render(){
        <div>
            //<Body posts={posts}/>
        </div>
    }
}  


App.propTypes = {
  posts: PropTypes.array.isRequired,
}

//Somehow connect, connects the state with the container APP =)
const mapStateToProps = state => ({ posts: state.posts })


export default connect(mapStateToProps)(App)
