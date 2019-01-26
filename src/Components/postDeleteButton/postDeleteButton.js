import React from 'react'

function postDeleteButton(props) {
    return <button onClick={() => props.deletePost(props.id)}>Delete</button>
}

export default postDeleteButton;