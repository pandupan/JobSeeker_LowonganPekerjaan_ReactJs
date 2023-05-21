import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Register = () => {
    
    const {state,handleFunction} = useContext(GlobalContext)
    const {inputregister} = state 
    const {handleChangeRegister,handleSubmitRegister} = handleFunction 


    return(
        <>
            <div className=" mb-20 mt-10 m-auto my-14 relative overflow-x-auto w-full max-w-xl max-h-full p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmitRegister} className="space-y-6" action="#">
                    <div className="flex item-center justify-center">
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-job-seeker-resume-flaticons-lineal-color-flat-icons.png" className="h-6 mr-3 sm:h-9" alt="Kerdja Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Job Seeker</span>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input value={inputregister.name} onChange={handleChangeRegister} name={'name'} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Your Name"  />
                        </div>
                        <div>
                            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                            <input value={inputregister.image_url} onChange={handleChangeRegister} name={'image_url'} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Link URL picture" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Adress</label>
                        <input value={inputregister.email} onChange={handleChangeRegister} name={'email'} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    </div> 
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input value={inputregister.password} onChange={handleChangeRegister} name={'password'} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                    </div> 
                    <div className="mb-6">
                        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                    </div> 
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                    </button>
                </form>
            </div>       
        </>
    )
}

export default Register