import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query'

import { useSession } from "next-auth/react"
import BlogsTable from '@/components/Table'
import Button from '@/components/Button';

export default function Admin() {
  const {data: session, status} = useSession()
  const { push } = useRouter();

  useEffect(() => {
    if(!session && status !== 'loading') {
      push('/')
    }
  },[session])

  const { isLoading, data } = useQuery({
    queryKey: ['posts'],
    enabled: !!(session && status !== 'loading'),
    queryFn: () =>
      fetch('/api/posts', {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json'
        },
      }).then(res => res.json())
  })
  
  return (
    <div className="flex flex-col min-h-screen ">
      <h2 className='mx-auto my-4 text-3xl'>Admin</h2>
      <div className='container mx-auto mb-6 flex justify-end'>
        <Button 
          type='submit' 
          className='mr-2 px-8 py-2'
          color='green'
          outlined
          onClick={() => push('/admin/post/create')}
        >Create new post</Button>
      </div>
     {status === 'loading' || isLoading  
     ? '...loading'
     : <BlogsTable data={data?.data || []}/>}
    </div>
  )
}
