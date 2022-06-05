import React, {useState, useEffect} from 'react';
import './App.css';
import PostForm from './components/PostForm';
//import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts'
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';



function App() {
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [posts, setPosts] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  async function fetchPosts(){
    setIsPostLoading(true)
    setTimeout(async() => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostLoading(false);
    }, 1000)
  }
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }
  
  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div className="App">
      <MyButton style={{marginTop:"30px"}} onClick={() => setModal(true)}>Добавить статью</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про так себе web" />
      }
    </div>
  );
}

export default App;
