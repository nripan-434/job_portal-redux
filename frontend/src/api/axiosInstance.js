import axios from 'axios'
import toast from 'react-hot-toast'


const API = axios.create({
    baseURL:'http://localhost:5000',
})

API.interceptors.request.use((config)=>{
    const token=JSON.parse(sessionStorage.getItem('token'))

    if(token){
    config.headers.Authorization=`Bearer ${token}`

    }
    return config

})
API.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if(error.response && error.response.status==401 ){
            
                
                    toast.error(error.response.data.error)
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('user')
                
                
             


        }
        return Promise.reject(error)    
    }

)


export default API;
