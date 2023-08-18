import LoadingButton from '@mui/lab/LoadingButton';

const LoaderButton = () => {
  return <LoadingButton
    size="large"
    onClick={() =>{}}
    loading={true}
    variant="outlined"
    classes={{
      loadingIndicator: 'text-white text-5xl'
    }}
    className='bg-green-800 text-white h-[61px] rounded-full'
  >
  </LoadingButton>
}

export default LoaderButton;