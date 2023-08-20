import { useSession, signOut} from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from '@/components/Button';

const ActionsButtons = () => {
  const { push } = useRouter();
  const { data: session } = useSession()

  return (
    <div className='md:space-x-2.5 flex flex-col md:flex-row md:items-center'>
      <Link className='mt-4 md:mt-0 pr-4 mr-8 flex text-black hover:text-green-700 font-semibold text-sm order-2 md:order-1' href={'/'}>
        <FaMapMarkerAlt className="text-2xl mr-3" /><span>Find a store</span>
      </Link>
      { session 
        ?  <Button onClick={() => signOut()} color='black'  outlined>Log out</Button>
        : <div className="flex md:order-2 items-center">
            <Button onClick={() => push('/account/signin')} color='black' className='mr-2 w-1/2 md:w-auto' outlined>Sign In</Button>
            <Button onClick={() => push('/account/signup')} color='black' className='w-1/2 md:w-auto' contained>Join now</Button>
          </div>
      }
  </div>

  )
}

export default ActionsButtons;