import React from 'react'
import {startUserRegister} from '../actions/user'
// import axios from '../../config/axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Swal from 'sweetalert2'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        // console.log(formData)
            let passwd=this.state.password
            const reg=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/;
            let test=reg.test(passwd)
            if(test){
                this.props.dispatch(startUserRegister(formData,this.props))
            }else{
                Swal.fire('password must contain Uppercase,LowerCase,number and special Character','','info')
            }
    }

    render(){
        return (
                <div className='background-img w-100'>
                <div className='col-md-3 p-5'>
                    <Card className='RegisterformPosition' style={{backgroundColor:'#bbcac5'}}>
                <div className='col-md-8 offset-2 p-3'><h4>Register Page</h4></div>
                <form onSubmit={this.handleSubmit} className='p-4' >
                <div className='form-group w-7'>
                    <input id='username' className='form-control RegisterPosition' type='text' value={this.state.name} onChange={this.handleChange} name="username" placeholder='username' required/></div>
                    <div className='form-group'>
                    <input id='email' className='form-control RegisterPosition' type='email' value={this.state.email} onChange={this.handleChange} name="email" placeholder='email' required/></div>
                    <div className='form-group'>
                    <input id='password' type='password' className='form-control RegisterPosition' value={this.state.password} onChange={this.handleChange}  name="password" placeholder='password' required/></div>
                <input type='submit' className="btn btn-primary RegisterPosition w-100"/>
                </form>
                <p className='RegisterPosition ml-5'>you have account?<Link to='/users/login'>user-Login</Link> </p>
                </Card>
            </div>
             </div>
        )
    }
}

export default connect()(Register)