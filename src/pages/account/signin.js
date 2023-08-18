import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn } from "next-auth/react"
import Link from 'next/link';

import { 
  FormControlLabel,
  Checkbox,
 }from '@mui/material';

import Button from '@/components/Button'
import FormWrapper from '@/components/form/FormWrapper';
import FormField, { ReuqiredElement } from '@/components/form/FormField';


export default function SignIn() {
  const { push } = useRouter();
  const { data: session } = useSession()

  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    // Replace with middleware
    if(session) {
      push('/')
    }
  },[session])


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!loginData.email || !loginData.password) return ;

    const signInData = await signIn('credentials',{
      redirect: false ,
      ...loginData
    })
    console.log(signInData,'signInData')
    if(signInData.error) {
      alert('error')
    } else {
      push('/')
    }

  }

  return (
    <div className="container mx-auto bg-white min-h-screen "> 
     <div className='mx-auto max-w-lg w-full '> 
      <h1 className='text-center py-12 mb-2 text-black font-bold text-3xl'>Sign in or create an account</h1>
      <FormWrapper> 
        <p className='pb-6'>
          <ReuqiredElement/>
          indicates required field
        </p>
        <div className='mb-6'> 
          <FormField 
            name='email'
            id='email' 
            type='email'
            required
            label='Username or email address'
          />
          </div>
          <FormField 
            name='Password'
            id='Password' 
            type='password'
            required
            label='Password'
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
            <Button className='text-lg rounded-full py-4 px-6 shadow-xl' color='green' contained> Sign in </Button>
          </div>
      </FormWrapper>

      <div className='mt-12 py-8 px-14 text-center'>
          <h2 className='font-bold text-sm text-green-800 uppercase mb-2'>Join Starbucks® Rewards</h2>
          <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
          <Button onClick={() => push('/account/signup')} className='mt-4' color='green' outlined>Join now</Button>
      </div>
     </div>
    </div>
  )
}
