/* eslint-disable react/no-string-refs */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-script-component-in-head */

import React, { useState } from "react";
import { motion } from "framer-motion";

const Layout: any = (props:any) => {

    const [isActive, setActive] = useState(false)

    const handeClickSidebar = () => {
        setActive(!isActive)
    }
  
    return (
        <>
            <motion.div className="relative min-h-screen md:flex">
                
            
                <div className="bg-mblack text-gray-100 flex justify-between md:hidden">
                    <a href="#" className="block p-4 text-white font-bold">Dashboard</a>
                    <button onClick={handeClickSidebar}  className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/*  + isActive ? ' -translate-x-full' : ''  */}

                <div className={isActive ? 'sidebar  bg-mblack text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out' : `sidebar  -translate-x-full  bg-mblack text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out ` }>
                    <a href="#" className="text-white flex items-center space-x-2 px-4">
                        <span className="text-2xl font-extrabold">Dashboard</span>
                    </a>

                    <nav>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
                            Home
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
                            Products
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
                            Sales
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
                            Clients
                        </a>
                        <a href="" className="block py-2.5 my-12 font-semibold px-4 rounded transition duration-200 hover:bg-black hover:text-white">
                            Log Out
                        </a>
                    </nav>
                </div>


                <div className="flex-1 p-10 bg-mwhite">
                    {props.children}
                </div>
            </motion.div>
        </>

    )
}

export default Layout