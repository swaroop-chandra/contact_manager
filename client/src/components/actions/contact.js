import axios from "../../config/axios"
import Swal from "sweetalert2"

export const showContact=(contact)=>{
    return {type:"SHOW_CONTACT",payload:contact}
}

export const startShowContact=(id)=>{
    return (dispatch)=>{
        axios.get(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            // console.log(response.data)
            const contact=response.data
            dispatch(showContact(contact))
        })
        .catch(err=>{
            alert(err)
        })
    }
}



export const startDeleteContact=(id,props)=>{
    return (dispatch)=>{
        axios.delete(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            
            props.history.push('/contacts')
            
        })
        .catch(err=>{
            alert(err)
        })
    }
}

export const startEditContact=(id,data,props)=>{
    return (dispatch)=>{
        axios.put(`/contacts/${id}`,data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                Swal.fire(response.data.message,'','info')
            }else{
                props.history.push(`/contacts/${response.data._id}`)
                Swal.fire('Saved!','','success')
            }
        })
        .catch(err=>{
            alert(err)
        })
    }
}

