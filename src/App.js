import React, {useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";
import axios from 'axios'
function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: "", search: "" });

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };
  
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search)

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = response.data.map(el => {
      el.description = el.body
      return el
  })
    setPosts(data)
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      <MyButton onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title="Список 1"
        remove={removePost}
      />
    </div>
  );
}

export default App;
