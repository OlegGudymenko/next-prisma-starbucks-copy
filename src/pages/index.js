import { useMutation } from '@tanstack/react-query'

import BlogPost from '@/components/BlogPost'


export default function Home({ posts }) {  
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

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`);
  const posts = await res.json();
  
  return {
    props: {
      posts: posts.data || [],
    },
  }
}