import axios from '../../config/axios'
import Swal from 'sweetalert2'

export const startUserRegister=(data,props)=>{
    return (dispatch)=>{axios.post('/users/register',data)
    .then(response=>{
        if(!response.data._id){
            Swal.fire('User already exists!!','','error')
        }else{
            props.history.push('/users/login')
        }
    })
}
    
}

export const startUserLogin=(data,props)=>{
    return (dispatch)=>{axios.post('/users/login',data)
    .then(response=>{
        if(response.data.hasOwnProperty('error')){
            Swal.fire(response.data.error)
        }else{
            const token=response.data.token
            localStorage.setItem('authToken',token)
            props.history.push('/contacts')
            window.location.reload()
        }
        // console.log(response.data.hasOwnProperty('errors'))
    })
    .catch(err=>{
        alert(err)
    })
}
}