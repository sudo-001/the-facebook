import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import Login from './login/login';
import NavBar from '@/components/global/Navbar';
import LeftSideBar from '@/components/sections/leftSideBar';
import RightSideBar from '@/components/sections/rightSideBar';
import Feed from '@/components/sections/Feed';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data: session} = useSession();

  if (!session) return <Login />

  return (
    <main className=''>
      <NavBar />
      {/* LeftSideBar */}
      <LeftSideBar />

      {/* HomePage */}
      <Feed />
      {/* RightSideBar */}
      <RightSideBar />
    </main>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}
