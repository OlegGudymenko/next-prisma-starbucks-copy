import Link from 'next/link';
import styled from '@emotion/styled'
import { 
  Divider, 
  IconButton, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails
} from '@mui/material';

import { clsx } from 'clsx';
import { 
  BsSpotify, 
  BsFacebook, 
  BsPinterest, 
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsChevronDown
} from "react-icons/bs";


const FooterElement = styled.div`box-shadow: 0 -1px 3px rgba(0,0,0,.1), 0 -2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07);`

const Footer = () => {

  const renderDesktopLinks = () => {
    const { title, list } = columnData;
    return (
      <div key={title} className={clsx('text-black md:w-48', { 'ml-8': !isFirst})}>
        <h2 className='text-lg mb-6'>{title}</h2>
        <ul className='flex flex-col'>
          {list.map(({ value, label }) => (
            <li key={value}>
              <Link href={value} className='block pointer text-base py-2 mb-2 text-gray-500 hover:text-black'>{label}</Link>
            </li>
          ))} 
        </ul>
      </div>
    )
  }
  
  const renderMainLinks = (columnData, isFirst) => {
    const { title, list } = columnData;
    return (
      <div key={title} className={clsx('text-black md:w-48', { 'ml-8': !isFirst})}>
        <h2 className='text-lg mb-6'>{title}</h2>
        <ul className='flex flex-col'>
          {list.map(({ value, label }) => (
            <li key={value}>
              <Link href={value} className='block pointer text-base py-2 mb-2 text-gray-500 hover:text-black'>{label}</Link>
            </li>
          ))} 
        </ul>
      </div>
    )
  };
  // const renderMainLinks = (columnData, isFirst) => {
  //   const { title, list } = columnData;
  //   return (
  //     <div key={title} className={clsx('text-black md:w-48', { 'ml-8': !isFirst})}>
  //       <h2 className='text-lg mb-6'>{title}</h2>
  //       <ul className='flex flex-col'>
  //         {list.map(({ value, label }) => (
  //           <li key={value}>
  //             <Link href={value} className='block pointer text-base py-2 mb-2 text-gray-500 hover:text-black'>{label}</Link>
  //           </li>
  //         ))} 
  //       </ul>
  //     </div>
  //   )
  // };

  const renderMainLinksMobile = (columnData) => {
    const { title, list } = columnData;
    return (
      <div key={title} className='w-full text-black '>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown className='text-2xl text-black' />}
            id={title}
          >
            <h2 className='flex items-center text-lg py-2 h-12 lg:h-auto lg:py-0'>{title}</h2>
          </AccordionSummary>
          <AccordionDetails>
            <ul className='flex flex-col'>
              {list.map(({ value, label }) => (
                <li key={value}>
                  <Link href={value} className='block pointer text-base py-2 mb-2 text-gray-500 hover:text-black'>{label}</Link>
                </li>
              ))} 
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  };

  const renderIconsLinks = () => {
    return (
      <div>
        {SOCIAL_ICONS.map(({ value, icon }) => (
          <IconButton className='text-3xl text-black' key={value}>
            <a href={value}>
              {icon}
            </a>
          </IconButton>
        ))}
      </div>
    )
  }

  const renderTermsLink = () => {
    return (
      <ul className='flex flex-col lg:flex-row mt-6 text-md lg:text-base'>
        {TERMS_LINK.map(({ value, label }, index) => {
          const isFirst = index === 0;
          return (
            <li key={value}>
              {index !== 0 && <span className='hidden lg:!inline px-2'>|</span> } 
              <Link href={value} className={clsx('hover:underline py-2 mb-2 lg:py-0 lg:mb-0 block lg:inline', {
                  'lg:pr-4': isFirst,
                  'lg:px-4': !isFirst
                })} 
              >{label}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  
  return (
    <FooterElement>
      <div className='px-6 lg:px-10 py-6 w-full'>
        <div className='flex-col lg:flex-row hidden lg:!flex'>
          {LINKS_COLUMNS.map((column, index) => renderMainLinks(column, index === 0))}
        </div>
        <div className='visbile lg:hidden'>
          {LINKS_COLUMNS.map((column) => renderMainLinksMobile(column))}
        </div>
        <div className='py-8'>
          <Divider/>
        </div>
        {renderIconsLinks()}
        {renderTermsLink()}
      </div>
     
    </FooterElement>
  )
}

const LINKS_COLUMNS = [
  {
    title: 'About Us:',
    list: [
      { value: 'our_company', label: 'Our Company'},
      { value: 'our_company', label: 'Our Coffee'},
      { value: 'our_company', label: 'Stories and News'},
      { value: 'our_company', label: 'Starbucks Archive'},
      { value: 'our_company', label: 'Investor Relations'},
      { value: 'our_company', label: 'Customer Service'},
    ]
  },
  {
    title: 'Careers:',
    list: [
      { value: 'our_company', label: 'Culture and Values'},
      { value: 'our_company', label: 'Inclusion, Diversity and Equity'},
      { value: 'our_company', label: 'College Achievement Plan'},
      { value: 'our_company', label: 'Alumni Community'},
      { value: 'our_company', label: 'U.S. Careers'},
      { value: 'our_company', label: 'International Careers'},
    ]
  },
  {
    title: 'Social Impact:',
    list: [
      { value: 'our_company', label: 'People '},
      { value: 'our_company', label: 'Planet '},
      { value: 'our_company', label: 'Environmental and Social Impact Reporting '},
    ]
  },
  {
    title: 'For Business Partners:',
    list: [
      { value: 'our_company', label: 'Landlord Support Center'},
      { value: 'our_company', label: 'Suppliers'},
      { value: 'our_company', label: 'Corporate Gift Card Sales'},
      { value: 'our_company', label: 'Office and Foodservice Coffee'},
    ]
  },
  {
    title: 'Order and Pick Up:',
    list: [
      { value: 'our_company', label: 'Order on the App'},
      { value: 'our_company', label: 'Order on the Web'},
      { value: 'our_company', label: 'Delivery'},
      { value: 'our_company', label: 'Order and Pick Up Options'},
      { value: 'our_company', label: 'Explore and Find Coffee for Home'},
    ]
  }
];

const SOCIAL_ICONS = [
  { value: 'https://open.spotify.com/user/starbucks', icon: <BsSpotify /> },
  { value: 'https://facebook.com/starbucks', icon: <BsFacebook /> },
  { value: 'https://www.pinterest.com/starbucks/', icon: <BsPinterest /> },
  { value: 'https://instagram.com/starbucks', icon: <BsInstagram /> },
  { value: 'href="https://www.youtube.com/starbucks', icon: <BsYoutube /> },
  { value: 'href="https://twitter.com/starbucks/', icon: <BsTwitter /> },
]


const TERMS_LINK = [
  { value: '/', label: 'Privacy Notice'},
  { value: '/', label: 'Terms of Use'},
  { value: '/', label: 'Do Not Share My Personal Information'},
  { value: '/', label: 'CA Supply Chain Act'},
  { value: '', label: 'Cookie Preferences'},
]

export default Footer;