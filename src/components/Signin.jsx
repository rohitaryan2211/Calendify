import {React, useState, useEffect} from 'react'
import {login} from '../assets'


const Signin = () => {
  

    const [data, setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        type:'student',
        
    })

    useEffect(()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:8080/api/v1/auth/register', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    },[data])

    const handleChange=(event, property)=>{
        setData({...data, [property]:event.target.value});
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        signUp(data).then((resp)=>resp.json()).then(data=>console.log(data));
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
                onSubmit={submitForm}
                >
                    <div className="mb-4 ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="firstname"
                        >
                            First Name
                        </label>
                        <input
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstname"
                            type="text"
                            placeholder="Enter your firstname"
                            value={data.firstName}
                            onChange={(e)=>handleChange(e,'firstname')}
                        />
                    </div>
                    <div className="mb-4 ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Last Name
                        </label>
                        <input
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastname"
                            type="text"
                            placeholder="Enter your lastname"
                            value={data.lastName}
                            onChange={(e)=>handleChange(e,'lastname')}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={(e)=>handleChange(e,'email')}
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
                            value={data.password}
                            onChange={(e)=>handleChange(e,'password')}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="type"
                        >
                            Type
                        </label>
                        <div className="relative">
                            <select
                                className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="type"
                                value={data.type}
                                onChange={(e)=>handleChange(e,'type')}
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