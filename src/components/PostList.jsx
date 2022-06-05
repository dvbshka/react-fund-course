import React from 'react';
import PostItem from './PostItem';
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
        return(
            <h1 style={{textAlign:"center", color: "red"}}>Посты не найдены</h1>
        )
    }

    return (
        <div style={{margin:"30px 0"}}>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((v, k) =>
                    <CSSTransition
                        key={v.id}
                        timeout={500}
                        className='post'
                    >
                    <PostItem remove={remove} number={k+1} post={v} />
                    </CSSTransition>
                )}  
            </TransitionGroup>
        </div>
    );
}

export default PostList;
