import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Header = () => {
  const { data: session } = useSession()
  console.log(session,'session')


  return (
    <div className='w-full border border-white p-4 flex justify-between'>
      <h3>Header</h3>
      <div className=''>
        {session ? 'Profile' :
          <div className='space-x-2.5'>
            <Link href='/signin'  className='text-blue-500 underline'>Sign In</Link>
            <Link href='/signup'  className='text-blue-500 underline'>Sign Up</Link>
          </div>
         }
      </div>
    </div>
  )
}

export default Header;