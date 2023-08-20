import { useState, Fragment } from 'react'
import { useSession } from "next-auth/react";
import { 
  IconButton, 
  Divider,
  Drawer
} from '@mui/material';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import Link from 'next/link';
import ActionsButtons from '@/components/header/ActionsButtons';

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

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open)
  };


  const renderMenu = () => {
    return <div className='flex flex-col w-80 px-8'>
      <div className='my-4 flex justify-end'>
        <IconButton 
          onClick={toggleDrawer(false)}
          className='text-3xl text-black'>
          <RxCross1/>
        </IconButton>
      </div>
      <ul className="flex flex-col items-start ">
        {NAV_LINKS.map(({value, label}) => 
          <Link key={value} 
            className='py-3 text-black tracking-widest text-lg' 
            href={value}>{label}</Link>)}
      </ul>
      <div className='py-4'>
        <Divider/>
      </div>
      <ActionsButtons/>
    </div>
  }

  return (
    <Fragment>
      <IconButton 
        onClick={toggleDrawer(true)}
        className='text-3xl text-black'>
          <RxHamburgerMenu/>
      </IconButton>
      <Drawer
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer( false)}
      >
      {renderMenu()}
    </Drawer>
    </Fragment>
   
  )
}

export default NavDrawer;