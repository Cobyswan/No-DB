import React from 'react'

function PostEditButton(props){
    return <button className='postEditButton' onClick={() => props.editPost(props.id)}>Edit</button>
}

export default PostEditButton;