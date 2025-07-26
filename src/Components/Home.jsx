import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPost } from "../features/postSlice";

const Home = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect (()=>{
    dispatch(fetchPost())

  },[])

  console.log(posts);

   const handleDelete = (id) => {
    dispatch(deletePost(id));
  };





  return (
<div className="container mx-auto">
  <h3 className="text-center mt-5 text-3xl font-semibold mb-3">Total Data is: {posts.length}</h3>

  {isLoading && <h1>Loading .....</h1>}
  {error && <h1>{error}</h1>}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {posts && posts.map((post, index) => (
      <div key={post._id} className="border-2 border-green-600 p-4 rounded shadow">
        <img className="w-full h-48 object-cover mb-2" src={post.photoURL} alt={post.name} />
        <p className="text-green-500 font-semibold text-center">{index + 1}. {post.name}</p>
       <div className="flex items-center justify-center">
          <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-600 text-white px-3 py-1 rounded mt-2 "
              >
                Delete
              </button>
       </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Home;
