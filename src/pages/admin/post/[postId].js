import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import PostForm from '@/components/admin/PostForm';

import { postSchema } from '@/validation/post';

export default function EditPostAdmin() {
  const {data: session, status} = useSession()
  const { push } = useRouter();

  const { query} = useRouter();
  const { postId } = query;

  useEffect(() => {
    if(!session && status !== 'loading' ) {
      push('/')
    }
  },[session])

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['postData'],
    enabled: !!postId,
    queryFn: () =>
      fetch(`/api/posts/${postId}`).then(
        (res) => res.json(),
      ),
  })

  const editPostMutation = useMutation({
    mutationFn: async () => {
      return await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
      })
    },
    onSuccess: () => refetch(),
    onError: (err) => {
      console.log(err)
    }
  });

  const { reset, control, handleSubmit, formState } = useForm({
    resolver: yupResolver(postSchema),
    mode: 'onChange',
  });
  
  useEffect(() => {
    if (data?.data) {
      reset(data?.data);
    }
  }, [reset, data]);

  const onSubmit = (data) => {
    editPostMutation.mutate(data)
  }

  if(isLoading) return '....loading'
  return <PostForm 
    onSubmit={handleSubmit(onSubmit)} 
    isLoading={isLoading || editPostMutation.isLoading}
    error={error || editPostMutation.error}
    control={control}
  />
}
