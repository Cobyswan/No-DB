import React from 'react'

function postFn(props){
    return <button className='postEditButton' onClick={() => props.editPost(props.id)}>Edit</button>
}

function postFn(props) {
    return <button className='postDeleteButton' onClick={() => props.deletePost(props.id)}>Delete</button>
}

export default postFn;