import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const ChangePass = () => {
    const {state,handleFunction} = useContext(GlobalContext)
    const [user] = useState(   JSON.parse(Cookies.get('user_data')))
    const {inputChangePas} = state 
    const {handleChangePass,handleSubmitPass,handleLogout} = handleFunction 

    return (
        <>       
            <div className="flex relative flex-col bg-white rounded-xl drop-shadow md:w-1/2 overflow-visible mx-auto items-center mt-20 pb-10 p-4">
                <Link to="/dashboard" className="absolute -left-7 -top-2 text-white font-semibold">
                    <buttom className="border bg-blue-900 p-4 rounded-xl">
                    Back to dashboard
                    </buttom>
                </Link>
                <header className="z-40 bg-gray flex items-center justify-between w-full mt-6  p-6 border-none ">
                    <h5 className="text-3xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">Data Account</h5>
                </header>
                <img className="w-24 my-8 h-24 mb-3 rounded-full object-cover " src={user.image_url} alt="Profile"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <form onSubmit={handleSubmitPass}>
                        <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Change Password</h5>
                        <div className="mb-6">
                            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                            <input value={inputChangePas.current_password} onChange={handleChangePass} name={'current_password'} type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                        </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                    <input value={inputChangePas.new_password} onChange={handleChangePass} name={'new_password'} type="password" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                                </div>
                                <div>
                                    <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                    <input value={inputChangePas.new_confirm_password} onChange={handleChangePass} name={'new_confirm_password'} type="password" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                                </div>
                            </div> 
                            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Submit
                            </button>
                            <button onClick={handleLogout} className="border my-4 text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-white-100 dark:hover:bg-gray-200 dark:focus:ring-gray-300">
                                logout
                            </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePass