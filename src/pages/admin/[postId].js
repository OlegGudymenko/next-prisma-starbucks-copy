import { useSession } from "next-auth/react"
import { useEffect, useState } from 'react'



export default function Home({ posts }) {
  const {data: session, status} = useSession()

  useEffect(() => {
    if( !session && status !== 'loading' ) {
      push('/404')
    }
  },[session])


  if(!session) {
    return null
  }

  return (
    <div className="flex flex-col">
     <h2>Admin</h2>
    </div>
  )
}
