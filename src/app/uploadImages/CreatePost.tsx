'use client';
import { useState } from 'react';
import axios from 'axios';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !file) {
      setMessage('Title and Image are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:3000/api/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer YOUR_JWT_TOKEN`, // Vendos JWT token-in
        },
      });

      setMessage('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      setMessage('Failed to create post');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-1 block w-full p-2"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
