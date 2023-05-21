import React from "react";
import { Link } from "react-router-dom"

import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const Sidebar = () => {
  const {handleFunction} = useContext(GlobalContext)
  const {handleLogout} = handleFunction 

return (
        <>
          <div className="hidden h-screen shadow-lg lg:block w-max z-10">
            <div className="h-full bg-white dark:bg-gray-700 px-8">
              <div className="flex items-center justify-start pt-6 ml-8">
                <Link to="/" className="flex items-center pl-2.5 mb-5">
                  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-job-seeker-resume-flaticons-lineal-color-flat-icons.png" className="h-6 mr-3 sm:h-9" alt="Job Seeker" />
                      <span className="self-center text-base font-semibold whitespace-nowrap dark:text-white">Job seeker</span>
                </Link>
              </div>
              <nav className="mt-6">
                <div>
                <ul className="space-y-2">
                  <hr/>
                  <li>
                      <Link to="/" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                      </svg>
                      <span className="ml-3">Home</span>
                      </Link>
                  </li>
                  <hr/>
                  <li>
                      <Link to="/dashboard/listdata" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">ManageData</span>
                      </Link>
                  </li>
                  <hr/>
                  <li>
                      <Link to="/dashboard/changepass" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                      </Link>
                  </li>
                  <hr/>
                  <li>
                      <div to="/login" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                      <span onClick={handleLogout} className="flex-1 ml-3 whitespace-nowrap">Log Out Account</span>
                      </div>
                  </li>
                  <hr/>
                </ul>
                </div>
              </nav>
            </div>
          </div>
        </>
    )
}

export default Sidebar