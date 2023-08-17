import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { usePostContext } from "../hooks/usePostContext";

const HomePage = () => {
  const [title, setTitle] = useState("");

  const {posts,dispatch}= usePostContext()

  const handlePost = async (e) => {
    e.preventDefault();

    const task = { title };
    const res = await fetch("http://localhost:4000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    if (res.ok) {
      setTitle("");
      dispatch({type:"POST",payload:data})

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
        dispatch({type:"POST",payload:data})
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

      <div className="all-post">
       {
        posts && posts.map((post)=>(
          <PostItem key={post._id} post={post}/>
        ))
       }
      </div>
    </div>
  );
};

export default HomePage;
