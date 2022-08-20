import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className=" p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center  border-b dark:border-gray-700 border-gray-200 ">
            <div className=" flex justify-between items-center  space-x-5 w-screen">
                <Link to=" /">
                    <p className=" flex  justify-center items-center  gap-2 text-2xl bg-blue-600 font-bold text-white py-2 px-4 rounded-full  dark:bg-blue-900  dark:text-gray-50">
                        Searchify
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border  rounded-full px-2 py-1 hover:shadow-lg -">
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>
            </div>
            <Search />
        </div>
    )
}
