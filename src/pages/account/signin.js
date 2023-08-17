'use client';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

import { useSession, signIn } from "next-auth/react"


export default function SignIn() {
  const { push } = useRouter();
  const { data: session } = useSession()

  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    // Replace with middleware
    if(session) {
      push('/')
    }
  },[session])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!loginData.email || !loginData.password) return ;

    const signInData = await signIn('credentials',{
      redirect: false ,
      ...loginData
    })
    console.log(signInData,'signInData')
    if(signInData.error) {
      alert('error')
    } else {
      push('/')
    }

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 ">
      <h2 className='text-center'>Sign in page</h2>
        <div className='text-black mt-10 p-4 w-60 flex-col justify-around flex border border-2 border-grey-400'>
          <input value={loginData.email}  onChange={handleChange} className='p-2 mb-4' type='email' name='email' placeholder='Email'/>
          <input  value={loginData.password}  onChange={handleChange} className='p-2' type='password' name='password' placeholder='Password' />
          <button onClick={handleSubmit} className='text-white mt-4'>Sign In</button>
        </div>
      </div>
    
    </main>
  )
}
