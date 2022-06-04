import React, {useState} from 'react';
import PostForm from './components/PostForm';
//import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList';
import './styles/App.css'
import { useInterval } from "@react-corekit/use-interval";
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';



function App() {


  const [test, setTest] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [posts, setPosts] = useState([
    { id: 4, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Your Description' },
    { id: 3, title: 'Athlon', body: 'Apper Description' },
    { id: 1, title: 'Zetton', body: 'Apper Description' },
  ]);



  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }



  useInterval(() => {
    setTest(test + 1);
  }, 10);




  function sortPosts(sort){
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])));
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: "15px 0"}} />
      <div>
        <MyInput
          value={searchQuery}
          placeholder="Поиск..."
          onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value : 'title', name : "По названию"},
            {value : 'body', name : "По описанию"},
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Посты про так себе web" />
        : <h1 style={{textAlign:"center"}}>Посты не найдены</h1>
      }

      <h2>{test}</h2>

    </div>
  );
}

export default App;
