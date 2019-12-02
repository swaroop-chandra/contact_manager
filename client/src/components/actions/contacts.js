import axios from "../../config/axios"
import Swal from 'sweetalert2'

export const getContacts=(contacts)=>{
    return {type:"GET_CONTACTS",payload:contacts}
}

export const startGetContacts=()=>{
    return (dispatch)=>{
        axios.get('/contacts',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const contacts=response.data
            dispatch(getContacts(contacts))
        })
}
}

export const startCreateContacts=(data,props)=>{
    return (dispatch)=>{
        axios.post('/contacts',data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                Swal.fire(response.data.message,'','info')
            }else{
            // console.log(response.data)
            props.history.push('/contacts')
            Swal.fire('Added','','success')
            }
        })
    }
}
