import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link';

import { 
  FormControlLabel,
  Checkbox,
 }from '@mui/material';

import Button from '@/components/Button'
import FormWrapper from '@/components/form/FormWrapper';
import FormField, { ReuqiredElement } from '@/components/form/FormField';

const passwordTooltip = 'Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.'

export default function SignUp() {
  const { push } = useRouter();
  const { data: session } = useSession()
  
  useEffect(() => {
    if(session) {
      push('/')
    }
  },[session])

  return (
  <div className="container mx-auto bg-white min-h-screen "> 
    <div className='mx-auto max-w-xl w-full '> 
      <div className='text-center pb-10'>
        <h1 className='py-12 mb-2 text-black font-bold text-3xl'>Create an account</h1>
        <h4 className='mb-3 font-bold text-gray-700 text-sm'>STARBUCKS® REWARDS</h4>
        <p className='px-4 text-gray-600 text-sm'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and 
          <Link href='more'>more</Link>.</p>
      </div>

      <FormWrapper> 
        <div className='px-12 py-2'>
          <div className='pb-6'>
            <div className='px-2 py-2 mb-3'> 
              <p className='pb-6'>
                <ReuqiredElement/>
                indicates required field
              </p>
              <h2 className='font-bold mb-4 text-xl'>Personal Information</h2>
                <FormField name='firstName' id='firstName' required label='First name'/>
              </div>
              <div className='px-2 py-2 mb-10'> 
                <FormField name='lastName' id='lastName' required label='Last name'/>
              </div>
              <div className='px-2 py-2 mb-3'> 
                <h2 className='font-bold mb-4 text-xl'>Account Security</h2>
                <FormField name='email' id='email' required label='Email address' tooltip='This will be your username'/>
              </div>
              <div className='px-2 py-2 mb-3'> 
                <FormField name='password' id='password' requiredlabel='Password' tooltip={passwordTooltip}/>
              </div>
            </div>
          
            <FormControlLabel 
              className='mt-4'
              control={
                <Checkbox size='large' defaultChecked color="success" />
              } label={
                <p>
                  I agree to the Starbucks® Rewards Terms and the 
                  Starbucks Card Terms and have read the 
                  Starbucks Privacy Statement
                </p>
              }
            />

            <div className='flex justify-end mt-8 '>
              <Button className='text-lg rounded-full py-4 px-6 shadow-xl' color='green' contained>
                Create account
              </Button>
            </div>
        </div>
      </FormWrapper>
     </div>
  </div>
  )
}
