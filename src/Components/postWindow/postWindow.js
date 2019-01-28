import React, {Component} from 'react';
import axios from 'axios';
import PostEditButton from '../PostEditButton/PostEditButton'
import PostDeleteButton from '../postDeleteButton/postDeleteButton'

class PostWindow extends Component {
  constructor (props) {
    super (props);

    this.state = {
      posts: [],
      text: '',
      editPost: '',
      time: new Date()
    };

    this.createPost = this.createPost.bind (this);
    this.deletePost = this.deletePost.bind (this);
    this.editPost = this.editPost.bind (this);
  }

  handleTextChange (val) {
    this.setState ({text: val});
  }
  handleEditChange (val) {
    this.setState ({editPost: val});
  }

  componentDidMount () {
    axios.get (`/api/posts`).then (res => {
      this.setState ({posts: res.data});
    });
  }

  createPost () {
    axios.post (`/api/post`, {text: this.state.text, time: this.state.time}).then (res => {
      this.setState ({posts: res.data});
    });
  }

  deletePost (id) {
    axios.delete (`/api/post/${id}`).then (res => {
      this.setState ({posts: res.data});
    });
  }

  editPost (id, text) {
    axios.put (`/api/posts/${id}`, {text: this.state.editPost, time: this.state.time}).then (res => {
      this.setState ({posts: res.data, editMode: true});
    });
  }

  hideEdit(){
    this.setState({editMode: false})
  }

  render () {
    return (
      <div className="fullPostContainer">
        <div className="newPostInputContainer">
          <input className='postInput'
            onChange={e => this.handleTextChange (e.target.value)}
            placeholder="Say something..."
          />
          <button className='postButton' onClick={this.createPost}>Post</button>
        </div>
        <div className="postContainer">
          {this.state.posts.map (post => {
            return (
              <div className="postInfo" key={post.id}>
                <p className="postText">{post.text}</p>
                <p className='postDate'>{post.time}</p>
                <div className='postButtonContainer'>
                  <PostDeleteButton className='postDeleteButton'id={post.id} deletePost={this.deletePost} />
                  <PostEditButton className='postEditButton' id={post.id} editPost={this.editPost} />
                  <input className='editPostInput' onChange={e => this.handleEditChange(e.target.value)}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostWindow;
