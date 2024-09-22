"use client";
import { useState } from "react";

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setSuccessMessage('File uploaded successfully!');
                setError('');
            } else {
                setError('Failed to upload file.');
                setSuccessMessage('');
            }
        } catch (error) {
            setError('Error uploading file: ' + error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-black">Upload your image</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="mb-0 space-y-6">
                        <label
                            htmlFor="uploadFile"
                            className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                        >
                            <span className="text-lg text-black">Upload file</span>
                            <input
                                type="file"
                                id="uploadFile"
                                className="hidden"
                                onChange={handleFileChange}
                                accept=".png, .jpg, .jpeg, .svg, .webp, .gif"
                            />
                            {fileName && <p className="text-sm text-gray-600 mt-2">{fileName}</p>}
                            <p className="text-xs font-medium text-gray-400 mt-2 text-black">PNG, JPG, SVG, WEBP, and GIF are Allowed.</p>
                        </label>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>

                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadPage;
