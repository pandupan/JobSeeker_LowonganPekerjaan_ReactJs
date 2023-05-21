import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const Login = () => {
  const {state,handleFunction} = useContext(GlobalContext)
  const {isWrongPassword,loading,inputlogin} = state 
  const {handleSubmitLogin,handleChange} = handleFunction 

    return (
      <form onSubmit={handleSubmitLogin}>
        <div className="mb-96 mt-40 m-auto my-14 relative overflow-x-auto w-full max-w-xl max-h-full p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 ">
          <div className="flex item-center mb-5 justify-center">
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-job-seeker-resume-flaticons-lineal-color-flat-icons.png" className="h-6 mr-3 sm:h-9" alt="Job Seeker" />
              <img src="" className="h-6 mr-3 sm:h-9" alt="" />
              <span className="self-center text-xl font-semibold whitespace-nowrap ">Job Seeker</span>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input value={inputlogin.email} onChange={handleChange} name={'email'} type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none " />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 ">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input value={inputlogin.password} onChange={handleChange} name={'password'} type="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none " />
              <label  className="peer-focus:font-medium absolute text-sm text-gray-500 ">Password</label>
          </div>
            {isWrongPassword && (
                <p className="py-2 text-red-500">Your email/password is not valid</p>
            )}
            <button 
            disabled={loading}
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
              {loading ? "Loading..." : "Submit"}
            </button>
            <div className="mt-5 text-sm font-medium text-gray-500 ">
                Don't have account yet?
                <Link to="/register" className="font-bold text-blue-700 hover:underline"> Register Here!!</Link>
            </div>
          </div>
      </form>
    )
  }

export default Login