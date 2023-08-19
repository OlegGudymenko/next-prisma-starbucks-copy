import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"

import Link from 'next/link';
import { FaMapMarkerAlt } from "react-icons/fa";
import styled from '@emotion/styled'
import Button from '@/components/Button';
import SvgComponent from '@/components/icons/Logo';
import { Fragment } from "react";

const ShadowWrapper = styled.div`box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07);`

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

  const renderActionsButtons = () => 
    <div className="ml-auto">
       <div className='space-x-2.5 flex items-center'>
          <Link className='pr-4 mr-8 flex text-black hover:text-green-700 font-semibold text-sm' href={'/'}>
            <FaMapMarkerAlt className="text-2xl mr-3" /><span>Find a store</span>
          </Link>
          { session 
            ?  <Button onClick={() => signOut()} color='black'  outlined>Log out</Button>
            : <Fragment>
                <Button onClick={() => push('/account/signin')} color='black' className='mr-2' outlined>Sign In</Button>
                <Button onClick={() => push('/account/signup')} color='black' contained>Join now</Button>
              </Fragment>
          }
        </div>
      </div>

  return (
    <ShadowWrapper>
      <header className='h-[100px] flex items-center bg-white shadow-md relative'>
        <nav className='px-10 flex items-center w-full'>
          {renderLogo()}
          <div className='flex w-full'>
            {renderNavLinks()}
            {renderActionsButtons()}
          </div>
        </nav>
      </header>
    </ShadowWrapper>
  )
}

export default Header;