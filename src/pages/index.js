import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    
    const posts = { title };
    const res = await fetch("http://localhost:4000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posts),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setPosts(data);
      setTitle("");
    }
    return;
  };

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("http://localhost:4000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setPosts(data);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <form onSubmit={handlePost}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type='text'
          placeholder={`What's on your mind?`}
          className='input'
        />
        <button type='submit'>Post</button>
      </form>

      <div>
        {posts && posts.map((post) => <PostItem key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default HomePage;
