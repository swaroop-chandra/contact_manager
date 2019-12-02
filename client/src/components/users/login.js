import React from 'react'
// import axios from '../../config/axios'
import {connect} from 'react-redux'
import {startUserLogin} from '../actions/user'
import {Card} from 'react-bootstrap'
import '../../App.css'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
        // console.log(formData)
        this.props.dispatch(startUserLogin(formData,this.props))
    }

    render(){
        return (
            // <div className='backcolor'>
        <div className='background-img w-100'>
            {/* </div> */}
                <div className='col-md-3 p-5'>
                    <Card className='formPosition' style={{backgroundColor:'#bbcac5'}}>
                <div className='col-md-8 offset-2 p-4'><h4>Login Page</h4></div>
                <form onSubmit={this.handleSubmit} className='p-4' >
                    <div className='form-group'>
                    <input id='email' className='form-control inputPosition' type='email' value={this.state.email} onChange={this.handleChange} name="email" placeholder='email' required/></div>
                    <div className='form-group'>
                    <input id='password' type='password' className='form-control inputPosition' value={this.state.password} onChange={this.handleChange}  name="password" placeholder='password' required/></div>
                <input type='submit' className="btn btn-primary inputPosition w-100"/>
                </form>
                <p className='inputPosition ml-5'>Dont have account?<Link to='/users/register'>sign up</Link> </p>
                </Card>
            </div>
             </div>
            //  </div>
        )
    }
}

export default connect()(Login)