import Navbar from '@/components/Navbar'
import './globals.css'

import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'





export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
     <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ijmj6ybp6v");
       </script>
    </html>
  )
}
