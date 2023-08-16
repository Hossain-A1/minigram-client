const PostItem = ({ post }) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:4000/api/user/${post._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
