import {React, useState} from 'react'
import {login} from '../assets'


const Signin = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tag, setTag] = useState('student');
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    
    const handleTagChange = (event) => {
        setTag(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, password, confirmPassword, tag });
    };

    return (
    <>
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left half with image */}
            <div className='flex bg-primary pb-8'>
                <div className="bg-primary flex-1 my-auto">
                    <img src={login} className=' mx-auto align-middle'/>
                </div>
            </div>

            {/* Right half with login form */}
            <div className="flex-1 lg:h-screen lg:min-h-0 flex items-center justify-center p-8 bg-slate-50">
                <form
                className="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
                >
                    <div className="mb-4 ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="confirm-password"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="tag"
                        >
                            Tag
                        </label>
                        <div className="relative">
                            <select
                                className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="tag"
                                value={tag}
                                onChange={handleTagChange}
                            >
                                <option value="student">Student</option>
                                <option value="prof">Professor</option>
                            </select>
                    
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-slate-50 hover:bg-gray-200 text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signin