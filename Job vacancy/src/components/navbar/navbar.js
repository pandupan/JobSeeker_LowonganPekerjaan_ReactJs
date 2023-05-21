import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'

const NavigationBar = () => {
  const {handleFunction} = useContext(GlobalContext)
  const {handleLogout} = handleFunction 


  return (
        <Navbar
        fluid={true}
        rounded={true}
        >
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-job-seeker-resume-flaticons-lineal-color-flat-icons.png" className="h-6 mr-3 sm:h-9" alt="Job Seeker" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">Job Seeker</span>
            </Link>
          <Navbar.Toggle />
            <Navbar.Collapse>
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                  <li className='pt-3'>
                    <Link to="/" className="self-center text-xl font-semibold whitespace-nowrap hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 " aria-current="page">Home</Link>
                  </li>
                  {
                    !Cookies.get('token') && <li>
                    <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                    <button className="btn btn-primary ">
                      Login
                      </button>
                      </Link>
                  </li>
                  }
                  {
                    Cookies.get('token') && (
                    <>
                      <li className='pt-3'>
                        <Link to="/dashboard" className="self-center text-xl font-semibold whitespace-nowrap hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
                      </li>
                      <li>
                        <span onClick={handleLogout}  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      <button className="btn btn-primary ">
                        Logout
                      </button>
                        </span>
                      </li>
                    </>
                    )
                  }
                </ul>
            </Navbar.Collapse>
          </div>
        </Navbar>
  )
}

export default NavigationBar