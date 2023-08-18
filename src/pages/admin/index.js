import { useEffect, useState } from 'react'

import { useSession } from "next-auth/react"
import BlogsTable from '@/components/Table'


export default function Admin() {
  const {data: session, status} = useSession()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json'
        },
      })
      const { data } = await response.json();

      setData(data)
      setLoading(false)
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }


  useEffect(() => {
    if(session && status !== 'loading' ) {
      fetchPosts();
    }
  },[session, status])

  if(status === 'loading' || loading) return '...loading'

  return (
    <div className="flex flex-col min-h-screen ">
      <h2 className='mx-auto my-6 text-3xl'>Admin</h2>
      <BlogsTable data={data}/>
    </div>
  )
}
