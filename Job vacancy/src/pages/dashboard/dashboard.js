import React from "react";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'
import Cookies from "js-cookie";
import { useState } from "react";



const Dashboard = () => {
    const {handleFunction} = useContext(GlobalContext)
    const {handleLogout} = handleFunction
    const [user] = useState( JSON.parse(Cookies.get('user_data')))

    return (
        <>
            <header className="z-40 bg-gray items-center justify-between w-full mt-6 block p-6 border-none ">
                <h5 className="text-3xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">Halo {user.name}👋, Selamat datang di halaman Dashboard 🙂</h5>
            </header>
            <div className="sm:flex flex-wrap items-stretch justify-center text-center gap-8 mt-10">
                <div className="card w-96 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/R4Q9ZzM/Landing-page-amico.png" alt="Home" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Home Page</h2>
                        <p className="mb-5">Kembali Pada Halaman Home Untuk Menampilkan Pekerjaan</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            <Link to='/'>Click Here  →</Link>
                            </button>
                        </div>
                    </div>
                    </div>
                <div className="card w-96 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/fFSZB5S/Metrics-rafiki.png" alt="List-Data" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Manage Data</h2>
                        <p className='mb-5'>Menampilkan List Data Pekerjaan Tersedia Serta Menambahkan Data</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                        <Link to='/dashboard/listdata'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                    </div>
                <div className="card w-96 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/3cCjkYQ/Reset-password-amico-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Profile</h2>
                        <p className='mb-5'>Menampilkan Profile Dari User Serta Menggubah Akun</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                        <Link to='/dashboard/changepass'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                    </div>
                <div className="card w-96 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/xXnwQGY/Mobile-login-pana.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Logout </h2>
                        <p className='mb-5'>Selesai Menggunakan Website, Silahkan Untuk Logout</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                        <span onClick={handleLogout}>Click Here  →</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard