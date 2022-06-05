import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
        return(
            <h1 style={{textAlign:"center", color: "red"}}>Посты не найдены</h1>
        )
    }

    return (
        <div style={{margin:"30px 0"}}>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((v, k) => <PostItem remove={remove} number={k+1} post={v} key={v.id} />)}  
        </div>
    );
}

export default PostList;
