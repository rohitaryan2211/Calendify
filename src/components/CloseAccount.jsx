import React from 'react'

const CloseAccount = () => {
  

  
  return (
    <>
        <div className='pb-80'>
            <h1>
                <span className='text-secondary' style={{fontWeight: 'bold'}}>Warning:</span> Once you delete your account, there's no going back. Please be certain.
            </h1>
            <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-4 w-50">
                Delete your account
            </button>
        </div>
    </>
  )
}

export default CloseAccount