import Image from 'next/image'
import Link from 'next/link'
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  console.log(session,'session')
  return (
    <main className="flex  flex-col items-center justify-between p-24">

    
      <div className="mb-32 max-w-lg ">
      <h2>Home page</h2>
       {!session && <Link href='/account/signin'
         className='text-blue-500 underline'>Sign IN</Link>} 
      </div>
      test
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  )
}
