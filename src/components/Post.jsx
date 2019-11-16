import React from 'react';
import { useState } from 'react';

const Post =(props)=>{
    const [editMode,setEditMode] = useState(false);
    const [text,setText] = useState(props.text);
    const editComment=()=>{
        setEditMode(true);
    }
    
    const saveComment=()=>{
        setEditMode(false);
        if(text){
            props.editPost({
            text,
            id: props.id
        })}
        else alert('if you want to remove the post click delete!')
    }
    
    const handleChange =(e)=>{
        return setText(e.target.value);
    }
    
    const deletePost =()=>{
        props.deletePost(props.id);
    }

    return (
        <div className="post">
            {editMode ? 
                <div className="editForm">
                    <textarea defaultValue ={text} onChange={handleChange}/>
                    <button onClick={saveComment}>Save</button>
                </div>
                :
                <div>
                    <h3>Post: {props.number}</h3>
                    {props.text}
                    <div className= "buttons">
                        <button onClick={editComment}>Edit</button>
                        <button onClick={ deletePost}>Delete</button>
                    </div>
                    <div className="time">{props.time}</div>
                </div>
             }    
        </div>
    )
}

export default Post;