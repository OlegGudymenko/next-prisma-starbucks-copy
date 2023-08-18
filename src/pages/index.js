import { useSession } from "next-auth/react"
import BlogPost from '@/components/BlogPost'


export default function Home({ posts }) {
  const { data: session } = useSession()

  console.log(session,'session')
  console.log(posts,'posts')

  return (
    <div className="flex flex-col">
      {posts.map(item => <div className='mt-8'><BlogPost key={item.id} {...item}/></div>)}
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