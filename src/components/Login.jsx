import {React, useState} from 'react'
import {login} from '../assets'
import {toast} from 'react-toastify';
import { loginUser } from '../services/user-service';

const Login = () => {
  
    const [loginDetail, setLoginDetail] = useState({
        email:'',
        password:'',
    });

    const handleChange = (event, field) => {
        let actualValue = event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]: actualValue
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(loginDetail)
        };
        fetch('http://localhost:8080/api/employees', requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));
        
    }
   
  
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
                    onSubmit={handleFormSubmit}
                >
                    <div className="mb-4 ">
                        <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                        >
                        Email
                        </label>
                        <input
                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        value={loginDetail.email}
                        onChange={(e)=>handleChange(e, 'email')}
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
                            value={loginDetail.password}
                            onChange={(e)=>handleChange(e, 'password')}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-slate-50 hover:bg-gray-200 text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Log in
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
  )
}

export default Login