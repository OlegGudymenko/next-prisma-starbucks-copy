import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Button from '@/components/Button';
import SvgComponent from '@/components/icons/Logo';

import { FaMapMarkerAlt } from "react-icons/fa";


const NAV_LINKS = [
  {
    value: '/menu',
    label: 'Menu'
  },
  {
    value: '/rewards',
    label: 'Rewards'
  },
  {
    value: '/gift',
    label: 'Gift Cards'
  },
]

// 1.5rem = 2.4rem
// base font size 10px
const Header = () => {
  const { push } = useRouter();
  const { data: session } = useSession()
  console.log(session,'session')

  const renderLogo = () => (
    <div className="lg:w-[51px] lg:h-[51px] mr-10">
      <Link href='/'><SvgComponent/></Link>
    </div>
  );


  const renderNavLinks = () => (
    <ul className="flex gap-x-6">
      {NAV_LINKS.map(({value, label}) => 
        <Link key={value} className='text-black hover:text-green-700 font-bold uppercase tracking-widest text-sm' href={value}>{label}</Link>)}
    </ul>
  )

  const renderActionsButtons = () => {
    return session ? 'Profile' :
      <div className="ml-auto">
        
        <div className='space-x-2.5 flex items-center'>
          <Link className='pr-4 mr-8 flex text-black hover:text-green-700 font-semibold text-sm' href={'/'}>
            <FaMapMarkerAlt className="text-2xl mr-3" /><span>Find a store</span>
          </Link>
          <Button onClick={() => push('/account/signin')} color='black' className='mr-2' outlined>Sign In</Button>
          <Button onClick={() => push('/account/signup')} color='black' contained>Join now</Button>
        </div>
      </div>
  }

  return (
    <header className='h-[100px] flex items-center bg-white'>
      <nav className='px-10 flex items-center w-full'>
        {renderLogo()}
        <div className='flex w-full'>
          {renderNavLinks()}
          {renderActionsButtons()}
        </div>
      </nav>
    </header>
  )
}

export default Header;