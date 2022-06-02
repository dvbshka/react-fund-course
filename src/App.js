import React, {useState} from 'react';
//import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'




function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'SuperDescription' },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  }


  return (
    <div className="App">
      <form>
        <MyInput onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder='Название поста' />
        <MyInput onChange={e => setBody(e.target.value)} value={body} type="text" placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про так себе web" />
    </div>
  );
}

export default App;
