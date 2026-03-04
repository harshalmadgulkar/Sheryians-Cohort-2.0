import { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/api/auth/register", {
            username,
            email,
            password
        }, { withCredentials: true });
        console.log(res);

        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <main className='min-h-screen w-full flex justify-center items-center'>
            <div className='flex flex-col gap-4 w-80'>
                <h1 className='text-2xl font-bold'>Register</h1>
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
                        type="email"
                        onInput={(e) => setEmail(e.target.value)}
                        value={email}
                        className='p-2 bg-white text-gray-500 rounded-2xl'
                        name="email"
                        placeholder='Enter Email'
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
                        Register
                    </button>
                </form>

                <p>Already have an account?
                    <Link
                        className='text-red-600 cursor-pointer no-underline'
                        to="/login"
                    >
                        {" "}Login
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Register;