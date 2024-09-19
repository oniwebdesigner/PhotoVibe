"use client";
import { useEffect, useState } from "react";

//data 
type Post = {
  id: number;
  title: string;
  author: {
    id: number;
    name: string;
  };
  image: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]); //posts
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch the posts
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.post); 
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setErrors({});

    const formData = new FormData();
    formData.append("title", title);
    formData.append("authorId", authorId);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setPosts([data.post, ...posts]);
        setTitle("");
        setAuthorId("");
        setImage(null);
      } else {
        setErrors(data.errors || { message: "An error occurred." });
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Create a Post</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="authorId" className="block text-sm font-medium">
              Author ID
            </label>
            <input
              type="text"
              id="authorId"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
            />
            {errors.authorId && <p className="text-red-500 text-sm">{errors.authorId}</p>}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium">
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="border border-gray-300 p-2 w-full rounded"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 w-full rounded"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
}
