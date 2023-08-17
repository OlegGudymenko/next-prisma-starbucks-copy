import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn } from "next-auth/react"

import SignInView from '@/view/SignInView'

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
    <SignInView 
    handleChange={handleChange}
      loginData={loginData} 
      handleSubmit={handleSubmit}/>
  )
}
