import React from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ListData = () => {
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
        setFilter} = state 
  const {
        handleEdit,
        handleChangeSearch,
        handleSearch,
        handleDeleteButton,
        handleText} = handleFunction 

    
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

    return (
        <>
            <header className="z-40 bg-gray flex items-center justify-between w-full mt-6 p-6 border-none ">
                <h5 className="text-3xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">List Data</h5>
            </header>
            <div className="flex flex-wrap place-content-center gap-4 m-auto  w-screen container mx-auto relative overflow-x-auto">
                <form onSubmit={handleSearch} className=" w-72">   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <div className="relative ">
                            <input onChange={handleChangeSearch} value={search} type="search" id="default-search" className="block w-full h-8 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
                            <button  type="submit" className="absolute right-1 top-1 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            <div className="border-solid border-1 rounded-md m-auto my-14 w-full relative overflow-x-auto mx-auto">
            <Link to="/dashboard/listdata/createdata">
                <button type="button" className="text-white my-4 ml-2 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Data
                </button>
            </Link>
            <Link to="/dashboard">
                <button type="button" className="text-white my-4 ml-2 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Back to dashboard
                </button>
            </Link>
                <Table>
                    <Table.Head className="bg-blue-600 text-white text-sm">
                        <Table.HeadCell>LOWONGAN</Table.HeadCell>
                        <Table.HeadCell>DESKRIPSI</Table.HeadCell>
                        <Table.HeadCell>KUALIFIKASI</Table.HeadCell>
                        <Table.HeadCell>KONTRAK KERJA</Table.HeadCell>
                        <Table.HeadCell>TIPE</Table.HeadCell>
                        <Table.HeadCell>STATUS</Table.HeadCell>
                        <Table.HeadCell>PERUSAHAAN</Table.HeadCell>
                        <Table.HeadCell>LOGO</Table.HeadCell>
                        <Table.HeadCell>KOTA</Table.HeadCell>
                        <Table.HeadCell>GAJI</Table.HeadCell>
                        <Table.HeadCell>ACTION</Table.HeadCell>
                    </Table.Head>
                        <Table.Body className="divide-y">
                        { dataJob !== null && dataJob.map((res) => {
                            return(
                                    <Table.Row key={res.id} className="bg-white dark:border-gray- text-sm dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
                                            {res.title}
                                        </Table.Cell>
                                        <Table.Cell >
                                            {handleText(res.job_description)}
                                        </Table.Cell>
                                        <Table.Cell >
                                            {handleText(res.job_qualification)}
                                        </Table.Cell>
                                        <Table.Cell >
                                            {res.job_tenure}
                                        </Table.Cell>
                                        <Table.Cell >
                                            {res.job_type}
                                        </Table.Cell>
                                        <Table.Cell >
                                            {res.job_status === 1 ? "Dibuka" : "Ditutup"}
                                        </Table.Cell>
                                        <Table.Cell >
                                            {res.company_name}
                                        </Table.Cell>
                                        <Table.Cell >
                                            <img key={res.id} src={res.company_image_url} alt=''/>
                                        </Table.Cell>
                                        <Table.Cell >
                                            {res.company_city}
                                        </Table.Cell>
                                        <Table.Cell >
                                            {res.salary_min} - {res.salary_max}
                                        </Table.Cell>
                                        <Table.Cell className="px-6 py-4" >
                                        &nbsp;
                                            <button onClick={handleEdit} value={res.id} type="button" className="bg-yellow-300 text-white bg-yellow border border-yellow-300 focus:outline-none hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-800 dark:text-yellow dark:border-yellow-600 dark:hover:bg-yellow-700 dark:hover:border-yellow-600 dark:focus:ring-yellow-700">Edited</button>
                                            <button onClick={() => handleDeleteButton(res.id)} value={res.id} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                        </Table.Cell>
                                    </Table.Row>
                                )})
                            }
                        </Table.Body>
                    </Table>
            </div>
        </>
    )
}

export default ListData