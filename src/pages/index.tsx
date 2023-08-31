import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import Login from './login/login';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data: session} = useSession();

  if (!session) return <Login />

  return (
    <div className='flex-1 '>
      HomePage
    </div>
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
