import React from 'react'

const ChangePassword = () => {
  return (
    <>

        <div className=" py-10 md:justify-start mx-auto pb-40">
          <div className="mb-2 ">
            <div>
                <label htmlFor="old-password" className="text-gray-700 font-bold mb-2 mr-14">Old Password:</label>
                <input type="password" id="old-password" name="old-password" className="border border-gray-400 py-2 px-2 rounded-lg w-1/2 mb-2 bg-white"/>
            </div>
            <div>
                <label htmlFor="new-password" className="text-gray-700 font-bold mb-2 mr-12">New Password:</label>
                <input type="password" id="new-password" name="new-password" className="border border-gray-400 py-2 px-3 rounded-lg w-1/2 mb-2 bg-white"/>
            </div>
            
            <div>
                <label htmlFor="confirm-password" className="text-gray-700 font-bold mb-2 mr-5">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" className="border border-gray-400 py-2 px-3 rounded-lg w-1/2 mb-2 bg-white"/>    
            </div>    
            <div>
                <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-4 w-1/4">
                Change Password
                </button>
            </div>
            
          </div>
 
        </div>
    </>
  )
}

export default ChangePassword