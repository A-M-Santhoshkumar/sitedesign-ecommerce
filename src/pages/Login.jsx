import React, { useState } from 'react'

const Login = () => {

  const [currentState,setCurrentState] = useState('Login');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onChange={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text=gray-400'>
       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
       </div>
       {currentState === 'Login' ? '': <input type="text" className='border w-full py-2 px-3 w-8 border-gray-800' placeholder='name' /> } 
        <input type="email" className='border w-full py-2 px-3 w-8 border-gray-800' placeholder='Email' />
         <input type="password" className='border w-full py-2 px-3 w-8 border-gray-800' placeholder='Password' />
           
           <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forget your Password </p>
                {
                  currentState === 'Login' ? 
                   <p className='cursor-pointer' onClick={() => setCurrentState('Sign Up')}>Create account</p> :
                  <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Login Here</p>
                }
           </div>
           <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  )
}

export default Login