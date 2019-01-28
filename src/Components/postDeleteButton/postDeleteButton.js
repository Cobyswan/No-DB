import React from 'react'

function postDeleteButton(props) {
    return <button className='postDeleteButton' onClick={() => props.deletePost(props.id)}>Delete</button>
}

export default postDeleteButton;