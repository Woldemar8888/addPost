import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import addPostAction from '../actions/addPost';
import editPostAction from '../actions/editPost';
import deletePostAction from '../actions/deletePost';
import Posts from '../components/Posts';

const App=(props)=>{
    const [text, setText] = useState('');
    const handleChange =(e)=>{
        return setText(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(text){
            props.addPost({
                text,
                time: new Date().toLocaleTimeString()
            });
            setText('');
        } 
    }
    
    return (
        <div className="appWrapper">
            <form onSubmit={handleSubmit}>
                <textarea value={text} placeholder="type here" onChange={handleChange} />
                <input type="submit" value="add post"/>
            </form>
            <Posts posts={props.posts} editPost={props.editPost} deletePost={props.deletePost}/>
        </div> 
    )
}

const  mapStateToProps =( state )=>{
    return { 
        text: state.addPostReducers.text,
        time: state.addPostReducers.time,
        posts: state.addPostReducers.posts
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
            addPost: (post)=>{
                dispatch(addPostAction(post))
            },
            editPost: ( obj )=>{
                dispatch(editPostAction(obj))
            },
            deletePost: (id)=>{
                dispatch(deletePostAction(id))
            }
        }
    }

export default connect( mapStateToProps, mapDispatchToProps )(App);
