import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import PostForm from '@/components/admin/PostForm';

import { postSchema } from '@/validation/post';

export default function CreatePostAdmin() {
  const {data: session, status} = useSession()
  const { push } = useRouter();

  useEffect(() => {
    if(!session && status !== 'loading') {
      push('/')
    }
  },[session])

  const createPostMutation = useMutation({
    mutationFn: async (data) => {
      return await fetch('/api/posts', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
    },
    onSuccess: (response) => {
      if(response.data){
        push('/admin')
      }
    },
    onError: (err) => {
      console.log(err)
    }
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(postSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    createPostMutation.mutate(data)
  }

  return <PostForm 
    onSubmit={handleSubmit(onSubmit)} 
    isLoading={createPostMutation.isLoading}
    error={createPostMutation.error}
    control={control}
  />
}
