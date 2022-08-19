import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Medium-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y-black py-10 lg:py-15'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read and connect
          </h1>
          <h2>
            Its easy and free to post your thinking on any topic and connect with millions of
            readers worldwide.
          </h2>
        </div>
        <img className='hidden md:inline-flex h-32 lg:h-full mr-10'
          src="https://seeklogo.com/images/M/medium-logo-31646BE2FD-seeklogo.com.png" alt="logo" />
      </div>

      {/* posts */}
    </div>
  )
}

export default Home
