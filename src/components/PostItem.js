import { usePostContext } from "../hooks/usePostContext";


const PostItem = ({ post }) => {
  
  
  const  dispatch= usePostContext()

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:4000/api/user/${post._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json()

    if(res.ok){
      dispatch({type:"DELETE",payload:data})
    }
  };

  return (
    <div className='post-item'>
      <div className='post-box'>
        <div className='ps'>
          {post?.title}
          <h2></h2>
          <span>{post.createdAt}</span>
        </div>

        <div>
          <button onClick={handleDelete} className='dlt'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
