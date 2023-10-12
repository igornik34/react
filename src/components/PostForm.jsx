import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
export default function PostForm({create}) {
  const [post, setPost] = useState({title: '', description: ''})
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {id: Date.now(), ...post}
    create(newPost)
    setPost({title: '', description: ''})
  }
  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}
