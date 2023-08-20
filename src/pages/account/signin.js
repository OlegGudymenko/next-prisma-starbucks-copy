import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn } from "next-auth/react"
import Link from 'next/link';
import { 
  FormControlLabel,
  Checkbox,
  Alert,
 }from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { signInSchema } from '@/validation/signin'
 
import Button from '@/components/Button';
import LoaderButton from '@/components/LoaderButton';
import FormWrapper from '@/components/form/FormWrapper';
import FormField, { ReuqiredElement } from '@/components/form/FormField';

export default function SignIn() {
  const { push } = useRouter();
  const { data: session } = useSession()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Replace with middleware
    if(session) {
      push('/')
    }
  },[session])


  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('')

    const signInData = await signIn('credentials',{
      redirect: false ,
      ...data
    })

    setLoading(false)

    if(signInData.error) {
      const parsed = JSON.parse(signInData.error);
      setError(parsed.message)
    } else {
      push('/')
    }
  }

  return (
    <div className="container mx-auto bg-white min-h-screen"> 
     <div className='mx-auto max-w-lg w-full '> 
      <h1 className='text-center py-12 mb-2 text-black font-bold text-3xl'>Sign in or create an account</h1>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}> 
        <p className='pb-6'>
          <ReuqiredElement/>
          indicates required field
        </p>
        {error && <Alert className='mb-6 -mt-2' severity="error">{error}</Alert>}
        <div className='mb-6'> 
          <FormField 
            name='email'
            type='email'
            label='Username or email address'
            control={control}
          />
          </div>
          <FormField 
            name='password'
            type='password'
            required
            label='Password'
            control={control}
          />

          <FormControlLabel 
            className='mt-4'
            control={
              <Checkbox size='large' defaultChecked color="success" />
            } label={
              <span>Keep me signed in.
                <Link className='ml-1 text-green-800 font-bold underline hover:no-underline' href='/'>Details</Link>
              </span>
            }
          />

          <div className='mt-4 flex flex-col space-y-2 '>
            <Link className='text-green-800 font-bold underline hover:no-underline' href='/'>Forgot your username?</Link>
            <Link className='text-green-800 font-bold underline hover:no-underline' href='/'>Forgot your password?</Link>
          </div>
          
    
          <div className='flex justify-end mt-8 '>
            {loading 
            ? <LoaderButton/>
            : <Button type="submit" className='text-lg rounded-full py-4 px-6 shadow-xl' color='green' contained> Sign in </Button>}
        </div>
      </FormWrapper>

      <div className='mt-12 py-8 px-14 text-center'>
          <h2 className='font-bold text-sm text-green-800 uppercase mb-2'>Join Starbucks® Rewards</h2>
          <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
          <Button  disabled={loading} onClick={() => push('/account/signup')} className='mt-4' color='green' outlined>Join now</Button>
      </div>
     </div>
    </div>
  )
}
