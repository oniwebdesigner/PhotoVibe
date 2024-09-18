// src/app/upload/page.js
"use client";
import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('Upload successful!');
        setFile(null);
        setPreview(null);
      } else {
        setStatus('Upload failed.');
      }
    } catch (error) {
      setStatus('Error uploading file.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleUpload} className="bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Photo</h2>
        
        {preview && (
          <img src={preview} alt="Preview" className="mb-4 w-64 h-64 object-cover" />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Upload
        </button>

        {status && <p className="mt-4">{status}</p>}
      </form>
    </div>
  );
}
