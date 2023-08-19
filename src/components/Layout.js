import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Navbar from './Header';
import Footer from './Footer';

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className='bg-white text-black min-h-screen'>
      <CssBaseline />
        <Navbar />
        <main className=''>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}