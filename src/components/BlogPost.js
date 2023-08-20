import { useRouter } from 'next/navigation';
import Button from '@/components/Button'

const BlogPost = ({
  title,
  content, 
  link,
  buttonText,
  background,
  imageUrl,
  imagePosition,
  onAction,
  id,
  index
}) => {
  const { push } = useRouter();

  const handleClick = () => {
    const userAgent = window.navigator.userAgent;
    const { width, height } = window.screen;

    onAction({
      postId: id,
      position: index + 1,
      screenSize: `${width}x${height}`,
      userAgent: userAgent
    }).finally(() => {
      push(link)
    })
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
    <div className='md:grid md:grid-cols-2' style={{
      backgroundColor: background
    }}>
      {!isImageRight && randerImage()}
      <div className='mx-auto lg:w-5/6 text-black flex flex-col items-center justify-center text-center py-8 px-4 md:px-10 md:py-0 lg:px-12'>
        <h2 className='w-11/12  tracking-[2px] text-3xl xl:text-5xl text-bold mb-8'>{title}</h2>
        <p className='text-xl md:text-2xl xl:text-2xl mb-6'>{content}</p>
        <Button 
          onClick={handleClick}
          className='text-lg rounded-full py-1.5 px-4' 
          outlined
          color='black'>{buttonText}</Button>
      </div>
      {isImageRight && randerImage()}
    </div>
  )
}

export default BlogPost;