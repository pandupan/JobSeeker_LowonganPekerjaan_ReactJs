import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
    
const Home = () => {
    const {state,handleFunction} = useContext(GlobalContext)

    const {
        FetchStatus,
        FetchData,
        dataJobOriginal,
        setDataJobOriginal,
        dataJob,
        setDataJob,
        search,
        filter,
        setFilter
    } = state 
    const {
        handleChangeSearch,
        handleSearch,
        handleJobStatus,
        handleText,
    } = handleFunction 

    useEffect(() => {
    if (FetchStatus === true){
        FetchData()
    }}, 
    [FetchData,FetchStatus])

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
                .then((res) => {
                setDataJobOriginal(res.data.data);
                setDataJob(res.data.data);
                // cities filter
                let cities = res.data.data.map(data => data.company_city)
                cities = Array.from(new Set([...cities]))
                // cities filter
                let contracts = res.data.data.map(data => data.job_tenure)
                contracts = Array.from(new Set([...contracts]))
                // cities filter
                let types = res.data.data.map(data => data.job_type)
                types = Array.from(new Set([...types]))
                setFilter({
                    cities,
                    contracts,
                    types
                })
            })
            .catch((error) =>{
                console.log(error)
            })
    }, []);


    useEffect(() => {
    axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
        setDataJob(res.data.data);
        console.log(res)
        })
        .catch((error) =>{
        console.log(error)
        })
    }, []);

    return (
    <>
        <section className="mb-16 bg-blue-900 dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Bingung Mencari Lowongan Pekerjaan ??</h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Job Seeker Website Terbaik Dalam Menyediakan Lowongan Pekerjaan Secara Up To Date dan Relevan  </p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className="ml-40 h-96 w-96" src="https://i.ibb.co/DKL5RvQ/Business-deal-rafiki.png" alt="mockup"/>
                </div>                
            </div>
        </section>
        <div className="mb-6 m-auto w-11/12 container max-auto relative overflow-x-auto">
            <p className="text-center max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white"> Cari Pekerjaanmu di sini! </p>
        </div>        
        <div className="flex flex-wrap place-content-center gap-4 m-auto  w-screen container mx-auto relative overflow-x-auto">
            <form onSubmit={handleSearch} className=" w-72">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <div className="relative ">
                            <input onChange={handleChangeSearch} value={search} type="search" id="default-search" className="block w-full h-8 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
                            <button type="submit" className="absolute right-1 top-1 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </div>
                </div>
            </form>
            <form className="w-30 flex flex-wrap place-content-center gap-2">
            <select 
            onChange={e => {
                setDataJob(prev => {
                    const filter = dataJobOriginal.filter(data => data.company_city === e.target.value)
                    return filter
                })
            }}
            id="small" 
            className="block w-32 p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Citties</option>
                {filter.cities.map(city => (
                    <option key={city}>
                        {city}
                    </option>    
                ))}
            </select>
            <select
            onChange={e => {
                setDataJob(prev => {
                    const filter = dataJobOriginal.filter(data => data.job_tenure === e.target.value)
                    return filter
                })
            }}
            id="small" 
            className="block w-36 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Contracts</option>
                {filter.contracts.map(contract => (
                    <option key={contract}>
                        {contract}
                    </option>    
                ))}
            </select>
            <select
            onChange={e => {
                setDataJob(prev => {
                    const filter = dataJobOriginal.filter(data => data.job_type === e.target.value)
                    return filter
                })
            }}
            id="small"
            className="block w-32 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option className="bg-white">Types</option>
                {filter.types.map(type => (
                    <option key={type}>
                        {type}
                    </option>    
                ))}
            </select>
            </form>
            <button 
            onClick={e => setDataJob([...dataJobOriginal])}
            type="submit" 
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                Reset
            </button>
            </div>
        <div className="flex flex-wrap place-content-center gap-4 m-auto  w-screen container mx-auto relative overflow-x-auto ">
            {dataJob !== null &&
            dataJob.map((res) => {
                return ( 
                <div key={res.id} className="relative w-96 p-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
                    <div>
                        <div className="flex items-center justify-start flex-grow w-full">
                        <Link to="/detail" className="relative block">
                            <img key={res.id} src={res.company_image_url} alt="" className="mx-auto object-cover rounded-3xl h-20 w-20 " />
                        </Link>
                        <div className="flex flex-col items-start ml-4">
                        <span key={res.id} className="text-gray-700 dark:text-white">
                            <p className="text-xl font-bold">
                        {res.company_name}
                            </p>
                        </span>
                        <div className="flex items-start col-span-1">
                            <svg  className=" mr-1 w-3 h-3 my-1 " fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                            </svg>
                            <span className="text-sm font-light text-gray-600 dark:text-gray-300">
                                {res.company_city}
                            </span>
                        </div>
                        <div className="flex items-start col-span-1">
                            <svg className=" mr-1 w-3 h-3 my-1 " fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"></path>
                            </svg>
                            <span className="text-sm font-light text-gray-500 dark:text-gray-300">
                            {res.job_type}
                            </span>
                            <svg  className=" ml-2  w-3 h-3 my-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="ml-1 text-sm font-light text-gray-500 dark:text-gray-300">
                            {res.job_tenure}
                            </span>
                        </div>
                    <div className="flex flex-wrap place-content-center gap-1">
                    <p  className="float-left">
                    {handleJobStatus(res.job_status)}
                    </p>
                    <Link  to={`/detail/${res.id}`} key={res.id} className="p-1 rounded-lg mt-3 h-7 w-36 bg-blue-600 text-sm text-white text-center font-semibold">
                        More Information →
                    </Link >
                    </div>
                        </div>
                    </div>
                    </div>
                    <hr className="mt-4"/>
                    <p className="mt-4 mb-2 text-lg text-gray-800 dark:text-white">
                    <strong key={res.id}>{res.title}</strong>
                    </p>
                    <p key={res.id}className="text-sm font-normal text-gray-400">
                    {handleText(res.job_description)}
                    </p>
            </div> 
            );
            })}
        </div>
    </>
    )
}

export default Home