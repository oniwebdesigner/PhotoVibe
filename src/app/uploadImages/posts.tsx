'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/post');
        setPosts(response.data.post);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded-md">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <div className="mt-2">
              <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full inline-block mr-2" />
              <span>{post.author.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
