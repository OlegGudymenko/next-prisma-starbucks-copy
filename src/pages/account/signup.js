import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"

import Link from 'next/link';

import { 
  FormControlLabel,
  Checkbox,
  Alert
 }from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { signUpSchema } from '@/validation/signup'

import Button from '@/components/Button';
import LoaderButton from '@/components/LoaderButton';

import FormWrapper from '@/components/form/FormWrapper';
import FormField, { ReuqiredElement } from '@/components/form/FormField';

const passwordTooltip = 'Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.'

export default function SignUp() {
  const { push } = useRouter();
  const { data: session } = useSession()
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(session) {
      push('/')
    }
  },[session])

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = async (userData) => {
    setLoading(true);
    setError('')

    const response = await fetch('/api/user/create', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(userData)
    })
    
    setLoading(false)

    const data = await response.json();

    if(data.user) {
      push('/account/signin')
    } else {
      setError(data.message || 'Something went wrong')
    }
  }


  return (
  <div className="container mx-auto bg-white min-h-screen"> 
    <div className='mx-auto max-w-xl w-full '> 
      <div className='text-center pb-10'>
        <h1 className='py-12 mb-2 text-black font-bold text-3xl'>Create an account</h1>
        <h4 className='mb-3 font-bold text-gray-700 text-sm'>STARBUCKS® REWARDS</h4>
        <p className='px-4 text-gray-600 text-sm'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and 
          <Link href='more'>more</Link>.
        </p>
      </div>

      <FormWrapper onSubmit={handleSubmit(onSubmit)}> 
        <div className='px-12 py-2'>
          <div className='pb-6'>
            <div className='px-2 py-2 mb-3'> 
              <p className='pb-6'>
                <ReuqiredElement/>
                indicates required field
              </p>
              {error && <Alert className='mb-6 -mt-2' severity="error">{error}</Alert>}
              <h2 className='font-bold mb-4 text-xl'>Personal Information</h2>
                <FormField name='firstName' required label='First name' control={control}/>
              </div>
              <div className='px-2 py-2 mb-10'> 
                <FormField name='lastName' required label='Last name' control={control}/>
              </div>
              <div className='px-2 py-2 mb-3'> 
                <h2 className='font-bold mb-4 text-xl'>Account Security</h2>
                <FormField 
                  name='email'  
                  label='Email address' 
                  tooltip='This will be your username'
                  control={control}
                  required
                />
              </div>
              <div className='px-2 py-2 mb-3'> 
                <FormField 
                  name='password' 
                  type='password'
                  requiredlabel='Password' 
                  tooltip={passwordTooltip}
                  control={control}
                />
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
            {loading 
            ? <LoaderButton/>
            : <Button type="submit" className='text-lg rounded-full py-4 px-6 shadow-xl' color='green' contained>  Create account </Button>}
            </div>
        </div>
      </FormWrapper>
     </div>
  </div>
  )
}
