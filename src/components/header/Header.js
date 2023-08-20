
import Link from 'next/link';
import styled from '@emotion/styled'
import SvgComponent from '@/components/icons/Logo';
import NavDrawer from '@/components/header/NavDrawer';
import ActionsButtons from '@/components/header/ActionsButtons';

import { NAV_LINKS } from './constants';

const ShadowWrapper = styled.div`box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07);`

const Header = () => {
  const renderLogo = () => (
    <div className="w-[40px] h-[40px] lg:w-[51px] lg:h-[51px] md:mr-10">
      <Link href='/'><SvgComponent/></Link>
    </div>
  );

  const renderNavLinks = () => (
    <ul className="flex items-center gap-x-6">
      {NAV_LINKS.map(({value, label}) => 
        <Link key={value} className='text-black hover:text-green-700 font-bold uppercase tracking-widest text-sm' href={value}>{label}</Link>)}
    </ul>
  )

  return (
    <ShadowWrapper>
      <header className='h-[70px] md:h-[100px] flex items-center bg-white shadow-md relative'>
        <nav className='px-6 lg:px-10 flex items-center w-full'>
          {renderLogo()}
          <div className='hidden md:!flex w-full'>
            {renderNavLinks()}
            <div className="ml-auto">
              <ActionsButtons/>
            </div>
          </div>
          <div className='ml-auto md:hidden'>
            <NavDrawer/>
          </div>
        </nav>
      </header>
    </ShadowWrapper>
  )
}

export default Header;