import React, {useState} from 'react';
import PostForm from './components/PostForm';
//import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList';
import './styles/App.css'




function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'SuperDescription' },
  ]);



  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Посты про так себе web" />
        : <h1 style={{textAlign:"center"}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
