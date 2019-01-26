import React from 'react'

function postEditButton(props){
    return <button onClick={() => props.editPost(props.id)}>Edit</button>
}

export default postEditButton;