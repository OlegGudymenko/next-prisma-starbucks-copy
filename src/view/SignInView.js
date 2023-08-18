import TextField from '@mui/material/TextField';

const FormWrapper = ({ children }) => (
  <div className='border border-black  max-w-lg w-full text-black p-4 '>
  {children}
</div>
)

const SignInView = (props) => {
  const { loginData, handleChange, handleSubmit} = props;
  return (
    <div className="container mx-auto  bg-white min-h-screen "> 
     
      <FormWrapper>
        <h1 className='flex mt-20 text-black text-center font-bold text-3xl'>Sign in or create an account</h1>
        <div className='block w-10 pt-10 bg-red mb-4'> 
          <TextField
          required
          fullWidth
          label="* Username or email address"
        />
        </div>
        {/* <TextField
          required
          fullWidth
          label="* Password"
          // defaultValue="Hello World"
        /> */}
      </FormWrapper>
        {/* <div className='text-black mt-10 p-4 w-60 flex-col justify-around flex border border-2 border-grey-400'>
          <input value={loginData.email}  onChange={handleChange} className='p-2 mb-4' type='email' name='email' placeholder='Email'/>
          <input  value={loginData.password}  onChange={handleChange} className='p-2' type='password' name='password' placeholder='Password' />
          <button onClick={handleSubmit} className='text-white mt-4'>Sign In</button>
        </div> */}
    </div>
  )
}

export default SignInView;