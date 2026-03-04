import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/api/auth/login", {
            username,
            password
        }, { withCredentials: true });
        console.log(res);

        setUsername("");
        setPassword("");
    };

    return (
        <main className='min-h-screen w-full flex justify-center items-center'>
            <div className='flex flex-col gap-4 w-80'>
                <h1 className='text-2xl font-bold'>Login</h1>
                <form className='flex flex-col gap-4' onSubmit={handleFormSubmit} >
                    <input
                        type="text"
                        onInput={(e) => setUsername(e.target.value)}
                        value={username}
                        className='p-2 bg-white text-gray-500 rounded-2xl'
                        name="username"
                        placeholder='Enter Username'
                    />
                    <input
                        type="password"
                        onInput={(e) => setPassword(e.target.value)}
                        value={password}
                        className='p-2 bg-white text-gray-500 rounded-2xl'
                        name="password"
                        placeholder='Enter Password'
                    />
                    <button
                        className='p-2 bg-red-600 text-white rounded-2xl cursor-pointer'
                        type="submit"
                    >
                        Login
                    </button>
                </form>

                <p>
                    Don't have an account?
                    <Link
                        className='text-red-600 cursor-pointer no-underline'
                        to="/register"
                    >
                        {" "}Register
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Login;