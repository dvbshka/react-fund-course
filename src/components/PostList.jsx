import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title}) => {

    //console.log("Props >", posts);

    return (
        <div style={{margin:"30px 0"}}>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((v, k) => <PostItem number={k+1} post={v} key={v.id} />)}  
        </div>
    );
}

export default PostList;
