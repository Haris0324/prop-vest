import React from 'react'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
// UserButton is avatar
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link href='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Prop</span>
                    <span className='text-slate-700'>Vest</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='Search...'/>
                <button>
                    <FaSearch className="text-slate-600"/>
                </button>
            </form>
            <ul className='flex gap-4'>
                <Link href='/'>
                    <li className='hidden md:inline text-slate-700 hover:underline'>
                        Home
                    </li>
                </Link>
                <Link href='/about'>
                    <li className='hidden md:inline text-slate-700 hover:underline'>
                        About
                    </li>
                </Link>
                {/* If user is signed in show its avatar otherwise show sign in button */}
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <Link href='/sign-in'>
                        <li className='hidden md:inline text-slate-700 hover:underline'>
                            Sign In
                        </li>
                    </Link>
                </SignedOut>
            </ul>

        </div>
    </header>
  )
}

export default Header