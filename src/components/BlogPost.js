import Button from '@/components/Button'

const BlogPost = ({
  title,
  content, 
  link,
  buttonText,
  background,
  imageUrl,
  imagePosition
}) => {

  const handleClick = () => {

  }

  const randerImage = () => (
    <div>
      <img 
        alt={title}
        src={imageUrl}/>
    </div>
  );

  const isImageRight = imagePosition === "RIGHT";
  return (
    <div className='grid grid-cols-2' style={{
      backgroundColor: background
    }}>
      {!isImageRight && randerImage()}
      <div className='mx-auto w-5/6 text-black flex flex-col items-center justify-center text-center px-12'>
        <h2 className='w-11/12 tracking-[2px] text-5xl text-semibold mb-8'>{title}</h2>
        <p className='text-2xl mb-6'>{content}</p>
        <Button 
          onClick={handleClick}
          className='text-lg rounded-full py-1.5 px-4' 

          color='black' outlined>{buttonText}</Button>
      </div>
      {isImageRight && randerImage()}
    </div>
  )
}

export default BlogPost;