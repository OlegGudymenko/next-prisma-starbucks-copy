import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

import Link from 'next/link'

import { useSession, signIn, signOut } from "next-auth/react"


export default function SignUp() {
  const { push } = useRouter();
  const { data: session } = useSession()
  
  useEffect(() => {
    if(session) {
      push('/')
    }
  },[session])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h2>Sign Up page</h2>
      <div className="mb-32 ">
        <Link href='/' className='text-blue-500 underline'>Home</Link>
      </div>
    
    </main>
  )
}
