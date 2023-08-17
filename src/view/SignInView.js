
const SignInView = (props) => {
  const { loginData, handleChange, handleSubmit} = props;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 ">
      <h2 className='text-center'>Sign in page</h2>
        <div className='text-black mt-10 p-4 w-60 flex-col justify-around flex border border-2 border-grey-400'>
          <input value={loginData.email}  onChange={handleChange} className='p-2 mb-4' type='email' name='email' placeholder='Email'/>
          <input  value={loginData.password}  onChange={handleChange} className='p-2' type='password' name='password' placeholder='Password' />
          <button onClick={handleSubmit} className='text-white mt-4'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default SignInView;