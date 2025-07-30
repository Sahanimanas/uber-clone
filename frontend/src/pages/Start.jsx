import React from 'react'
import { Link } from 'react-router'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/9260061/pexels-photo-9260061.jpeg)] py-8  h-screen w-[100%] flex flex-col justify-end pb-0 '>
        <img className='w-20 ml-10  ' src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="" />
            <img src="" alt="" />
            <div className='bg-white py-7 px-4 mt-[100%] '>
              <h2 className='font-bold text-3xl mb-3'>
                Get started to Uber
              </h2>
              <Link className='flex items-center justify-center bg-black rounded-2xl text-white w-full h-10 ' to= '/user-login'> continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start