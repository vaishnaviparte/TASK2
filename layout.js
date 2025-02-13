// import { Inter } from "next/font/google";
import {Poppins} from 'next/font/google'
import Header from './components/Header';
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight:['400', '700'],
  subsets:['latin'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
        </body>
    </html>
  );
}
