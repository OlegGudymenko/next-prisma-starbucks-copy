import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import BlogPost from '@/components/BlogPost'


export default function Home({  }) {  
  const [posts, setPosts] = useState([]);

  useEffect(async() => {
    try{
      const result = await fetch('/api/posts', {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json'
        },
      }).then(res => res.json())
      console.log(result,'result ')
      setPosts(result.data || [])
    }catch(err) {
      console.log(err,'catch error')
    }

  }, [])

  const actionMutation = useMutation({
    mutationFn: async (data) => {
      return await fetch('/api/actions', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
    },
    onError: (err) => {
      console.log(err)
    }
  });

  return (
    <div className="flex flex-col">
      {posts.map((item, index) => <div key={item.id} className='mt-8'>
        <BlogPost onAction={actionMutation.mutateAsync} index={index} {...item} />
      </div>)}
      <div className="flex justify-center text-center py-8 mt-8">
        <p className="text-sm">*Impossible is a trademark of Impossible Foods Inc. Used under license</p>
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
//   // console.log(process.env.NEXT_PUBLIC_API_ENDPOINT,'process.env.NEXT_PUBLIC_API_ENDPOINT')
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`);
//   const posts = await res.json();
//   console.log(posts, 'res get posts')
//   return {
//     props: {
//       posts: posts.data || [],
//     },
//   }
// }