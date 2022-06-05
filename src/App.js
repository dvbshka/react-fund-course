import React, {useState, useMemo} from 'react';
import PostForm from './components/PostForm';
//import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList';
import './styles/App.css'
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';



function App() {


  const [filter, setFilter] = useState({sort: '', query: ''});

  const [posts, setPosts] = useState([
    { id: 4, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Your Description' },
    { id: 3, title: 'Athlon', body: 'Apper Description' },
    { id: 1, title: 'Zetton', body: 'Apper Description' },
  ]);



  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }


  const [modal, setModal] = useState(false)


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortedPost = useMemo(() => {
    console.log("getSortedPosts: " + filter.sort);
    return (filter.sort
      ? [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
      : posts
    );
  }, [filter.sort, posts]);


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPost])





  return (
    <div className="App">
      <MyButton style={{marginTop:"30px"}} onClick={() => setModal(true)}>Добавить статью</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про так себе web" />
    </div>
  );
}

export default App;
