import React from 'react';
import Post from './Post';

const Posts =(props)=>{
    const posts = props.posts.map((post, index)=>{
        return (
            <Post 
               text={post.text} 
               time={post.time}
               key={index}
               number={index+1}
               editPost={props.editPost}
               deletePost={props.deletePost}
               id={index}
            />  
        )
    })
    
    return (
        <div>
            {posts}
        </div>
    )
}

export default Posts;