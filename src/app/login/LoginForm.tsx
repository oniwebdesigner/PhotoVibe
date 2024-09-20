// components/LoginForm.js
'use client';
import { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            setToken(data.token);
        } else {
            setError(data.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-black p-6 rounded shadow-md w-80">
                <h2 className="text-lg font-bold mb-4">Hyr në Llogarinë Tënde</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Fjalëkalimi</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Hyr
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {token && <p className="text-green-500 mt-2">Hyrja ishte e suksesshme!</p>}
            </form>
        </div>
    );
};

export default LoginForm;
