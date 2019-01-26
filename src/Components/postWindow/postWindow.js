import React, { Component } from 'react'
import axios from 'axios'
import PostDeleteButton from '../postDeleteButton/postDeleteButton'
import PostEditButton from '../postEditButton/postEditButton'

class PostWindow extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            text: ''
        }

        this.createPost = this.createPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.editPost = this.editPost.bind(this)
    }

    handleTextChange(val){
        this.setState({text: val})
    }
    
    componentDidMount(){
        axios.get(`/api/posts`).then((res) => {
            this.setState({posts: res.data})
        })
    }
    
    createPost(){
        axios.post(`/api/post`, {text: this.state.text} ).then((res) => {
            this.setState({posts: res.data})
        })
    }

    deletePost(id){ 
        axios.delete(`/api/post/${id}`).then((res) => {
            this.setState({posts: res.data})
        })
    }

    editPost(id){
        axios.put(`/app/posts/${id}`, {text: this.state.text}).then((res) => {
            this.setState({posts: res.data})
        })
    }

    render(){
        return(
            <div className='fullPostContainer'>
                <div className='newPostInputContainer'>
                    <input onChange={(e) => this.handleTextChange(e.target.value)} placeholder='Talk about what youre reading currently'/>
                    <button onClick={this.createPost}>Add</button>
                </div>
                <div className='postContainer'>
                    {this.state.posts.map((post) => {
                        return( 
                        <div className='postInfo' key={post.id}>
                        <p>{post.text}</p>
                        <PostDeleteButton id={post.id} deletePost={this.deletePost}/>
                        <PostEditButton id={post.id} editPost={this.editPost}/>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PostWindow;