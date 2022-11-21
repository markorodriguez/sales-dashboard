/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Link from "next/link"
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <div className='min-h-screen h-screen w-full flex items-center justify-center bg-mblack'>
          <div className='h-4/6 w-5/6 border-4 shadow-sm border-slate-100 text-mblack bg-slate-100 flex rounded-xl overflow-hidden'>
            <div className='w-full md:w-3/6 h-full flex flex-row items-center justify-center'>
              <motion.div className='h-5/6 w-5/6 flex justify-center items-center md:items-start flex-col md:text-left' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
                <img src="https://icons-for-free.com/download-icon-dashboard-131979012867438271_512.png" className='w-10' alt="logo_dashboard" />
                <h1 className='md:mt-6 mt-4 text-2xl'>Login to your <strong>Sales Dashboard</strong></h1>
                <p className='mt-4 text-sm text-gray-600' >Get all the information you need.</p>

                <form className='md:mt-8 my-6 w-full md:text-left text-center'>
                  <input className='md:my-4 my-2 py-3 shadow-md rounded-md  md:w-3/6 w-5/6 px-4' placeholder='username@example.mail' type="text" required /> <br />
                  <input className='md:my-4 my-2 py-3 shadow-md rounded-md  md:w-3/6 w-5/6 px-4' placeholder='*********************' type="password" required />
                </form>

                <Link href="/admin/dashboard">
                  <button className='bg-mblack shadow-lg w-3/6 text-white font-semibold  py-3 rounded-xl border-2 border-mblack hover:text-mblack hover:bg-slate-100 transition-all'>Login</button>
                </Link>
                

              </motion.div>
            </div>
            <div className='hidden md:block w-3/6 h-full bg-login bg-cover bg-left relative'>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
