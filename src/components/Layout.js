import Navbar from './Header';
import Footer from './Footer';
 
export default function Layout({ children }) {
  return (
    <div className='min-h-screen bg-gray-700'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}