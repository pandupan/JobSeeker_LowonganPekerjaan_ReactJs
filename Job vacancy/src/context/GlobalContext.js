import React, { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";



 export const GlobalContext = createContext()
    export const GlobalProvider = (props) => {
    const navigate = useNavigate()
    
    const [detail, setDetail] = useState([]);
    const [inputlogin,setInputLogin] = useState ({
        email : '',
        password : ''
        })
    const [isWrongPassword, setIsWrongPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState({
        cities: [],
        contracts: [],
        types: []
    })
    const [search, setSearch] = useState("")
    const [display, setDisplay] = useState(false)
    const [dataJob, setDataJob] = useState([])
    const [dataJobOriginal, setDataJobOriginal] = useState([])
    const [data, setData] = useState(null);
    const [input, setInput] = useState({
        company_image_url:" ",
        title: " " ,
        job_description: " " ,
        job_qualification: " " ,
        job_type: ' ' ,
        job_tenure: ' ' ,
        job_status: 0 , 
        company_name: '' , 
        company_city: '' , 
        salary_min: 0,
        salary_max: 0,
    });
    const [FetchStatus, setFetchStatus] = useState(true);
    const [ID_JOB_APPS, setID_JOB_APP] = useState(-1);

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    setInput({ ...input, [name] : value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    let { 
        company_image_url,
        title,
        job_description,
        job_qualification,
        job_type,
        job_tenure,
        job_status, 
        company_name, 
        company_city, 
        salary_min,
        salary_max,
    } = input;
    if (ID_JOB_APPS === -1) {
    axios.post("https://dev-example.sanbercloud.com/api/job-vacancy", {
        company_image_url,
        title,
        job_description,
        job_qualification,
        job_type,
        job_tenure,
        job_status, 
        company_name, 
        company_city, 
        salary_min,
        salary_max,
        },{headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
        console.log(res);
        setFetchStatus(true);
        navigate('/dashboard/listdata')
        });
    } else {
    axios.put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${ID_JOB_APPS}`,
        {
        company_image_url,
        title,
        job_description,
        job_qualification,
        job_type,
        job_tenure,
        job_status, 
        company_name, 
        company_city, 
        salary_min,
        salary_max,
        },{headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
        )
        .then((res) => {
        console.log(res);
        setFetchStatus(true);
        })
    }
    setID_JOB_APP(-1);
    setInput({
        company_image_url:" ",
        title: " " ,
        job_description: " " ,
        job_qualification: " " ,
        job_type: ' ' ,
        job_tenure: ' ' ,
        job_status: 0 , 
        company_name: '' , 
        company_city: '' , 
        salary_min: 0,
        salary_max: 0,
    });
};
    const handleDelete = (id) => {
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`,{headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
            setFetchStatus(true)
        });
    };
    const handleEdit = (event) => {
        let ID_JOB_APPS = parseInt(event.target.value)
        setID_JOB_APP(ID_JOB_APPS);
        navigate(`/createdata/${ID_JOB_APPS}`)
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_JOB_APPS}`,{headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then ((res)=> {
        let data = res.data;
        setInput({
            company_image_url:data.company_image_url,
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status, 
            company_name: data.company_name, 
            company_city: data.company_city, 
            salary_min: data.salary_min,
            salary_max: data.salary_min,
        })
        })
    };
        let FetchData = () => {
            axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            .then((res) => {
            setData([...res.data])
            })
            .catch((error) => {
            })
            setFetchStatus(true)
        }

    const handleChangeSearch = (event) => setSearch(event.target.value)
        const handleSearch = (event) => {
        event.preventDefault()
        let fetchData = async () => {
            setDisplay(true)
            let { data } = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            let dataJob = data.data
            console.log(dataJob)
            let searchData = dataJob.filter((res) => {
                const data =  Object.values(res).join(' ').toLowerCase();
                const regex = new RegExp(search, 'gi')
                return regex.test(data)
            })
            setDataJob(searchData)
                setDisplay(false)
            }
            fetchData()
        }

    const handleChange = (e) => setInputLogin ({...inputlogin, [e.target.name]: e.target.value})
    const handleSubmitLogin = (e)  => {
        setLoading(true)
        e.preventDefault()
        let {email,password} = inputlogin
        axios.post('https://dev-example.sanbercloud.com/api/login', {email, password})
        .then((res) => {
            let{data} = res
            let {token,user} = data
            Cookies.set('token',token,{expires:1})
            Cookies.set('user_data', JSON.stringify(user),{expires:1})
            navigate('/dashboard')
            setLoading(false)
        })
        .catch((err) =>{
            if(err.response.status === 400){
                setIsWrongPassword(true)
            } else {
                alert(err)
            }
            setLoading(false)
        })
    }
    const [inputregister, setInputRegister] = useState(
        {
            name:"",
            image_url:"",
            email:'',
            password:''
        }
    )
    const handleChangeRegister = (e) => setInputRegister({...inputregister, [e.target.name] : e.target.value})
    const handleSubmitRegister = (e) => {
        e.preventDefault()
        console.log(inputregister)
        let{name,image_url,email,password} = inputregister
        axios.post('https://dev-example.sanbercloud.com/api/register', {email, password,name,image_url})
        .then((res) => {
            let {data} = res
            console.log(data)
            navigate('/login')
        })
        .catch((err) =>{
            alert(err)
        })
    }
    const handleDeleteButton = (id) => {
        handleDelete(id)
        setDataJob(prev => {
            return prev.filter(data => data.id !== id)
        })
        setDataJobOriginal(prev => {
            return prev.filter(data => data.id !== id)
        })
    }
    const [inputChangePas, setInputChangePass] = useState(
        {
            current_password: '',
            new_password : '',
            new_confirm_password: '',
        }
    )
    const handleChangePass = (e) => setInputChangePass({...inputChangePas, [e.target.name] : e.target.value})
    const handleSubmitPass = (e) => {
        e.preventDefault()
        console.log(inputChangePas)
        let{current_password,
        new_password,
        new_confirm_password} = inputChangePas
        axios.post('https://dev-example.sanbercloud.com/api/change-password', {current_password,new_password,new_confirm_password},{headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
            let {data} = res
            console.log(data)
            let {token} = data
            Cookies.set('token', token, {expires : 1})
        })
        .catch((err) =>{
            alert(err)
        })
    }
    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user_data')
        navigate('/')
      }

    const handleText = (text) => {
    return text ? text.slice(0,50) : 'Data Tidak Tersedia'
    }

    function handleJobStatus(hasil) {
        if(hasil === 1){
          return(
            <div  className="p-1 rounded-lg mt-3 h-7 w-18 bg-green-400 text-sm text-white text-center font-semibold">
              Open
            </div>
          )
        }else if(hasil !== 1){
          return(
            <div  className="p-1 rounded-lg mt-3 h-7 w-18 bg-red-400 text-sm text-white text-center font-semibold">
              Closed
            </div>
          )
        }
      }

      function handleConvertRupiah(angka){
        if (angka === 0 ) {
            return 'Tidak ada'
        } else if (angka >0) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
                for(var i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
                    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }}

        //state & function
        let state = {
            data,
            setData,
            input,
            setInput,
            FetchStatus,
            setFetchStatus,
            ID_JOB_APPS,
            setID_JOB_APP,
            FetchData,
            setDataJobOriginal,
            dataJobOriginal,
            dataJob,
            setDataJob,
            search,
            setSearch,
            display,
            setDisplay,
            filter,
            setFilter,
            inputlogin,
            setInputLogin,
            isWrongPassword,
            loading,
            inputregister,
            setInputRegister,
            detail,
            setDetail,
            inputChangePas
        }
        let handleFunction = {
            handleInput,
            handleSubmit,
            handleDelete,
            handleEdit,
            handleChangeSearch,
            handleSearch,
            handleChange,
            handleSubmitLogin,
            handleChangeRegister,
            handleSubmitRegister,
            handleDeleteButton,
            handleChangePass,
            handleSubmitPass,
            handleLogout,
            handleJobStatus,
            handleText,
            handleConvertRupiah
        }

        return (
            <GlobalContext.Provider value={
                {
                    state,
                    handleFunction
                }
            }>
                {props.children}
            </GlobalContext.Provider>
        )
    }   
