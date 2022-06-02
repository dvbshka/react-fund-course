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



  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Посты про так себе web" />
      <PostForm create={createPost} />
    </div>
  );
}

export default App;
