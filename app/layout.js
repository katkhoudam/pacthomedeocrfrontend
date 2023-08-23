import Navbar from '@/components/Navbar'
import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'





export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
     <Script (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ijmj6ybp6v"); />
    </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
     
    
       
    </html>
  )
}
