import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title}) => {

    //console.log("Props >", posts);

    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((v, k) => <PostItem number={k+1} post={v} key={v.id} />)}  
        </div>
    );
}

export default PostList;
