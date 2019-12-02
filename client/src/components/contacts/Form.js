import React from 'react'
import {Card} from 'react-bootstrap'


export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.contact ? props.contact.name:'',
            email:props.contact ? props.contact.email:'',
            mobile:props.contact ? props.contact.mobile:'',
            category:props.contact ? props.contact.category:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            category:this.state.category,
        }
        // console.log(formData)
        this.props.handleSubmit(formData)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='form-group'>
                <div className='form-group form'>
                    <input className='form-control' type='text' value={this.state.name} onChange={this.handleChange} name='name' placeholder='name'/>
                </div><div className='form-group form'>
                    <input type='email' className='form-control' placeholder='email' value={this.state.email} onChange={this.handleChange} name='email'/></div>
                    <div className='form-group form'>
                    <input type='text' className='form-control' placeholder='mobile' value={this.state.mobile} onChange={this.handleChange} name='mobile'/></div>
                    <div className='form-check form-check-inline form offset-1'>
                    <input type='radio' className='form-check-input'id='home' value='home' name='category' onChange={this.handleChange} checked={this.state.category=='home'}/>
                    <label htmlFor='home'>Home</label>
                    <input type='radio' className='form-check-input ml-2' id='work' value='work' name='category' onChange={this.handleChange} checked={this.state.category=='work'}/><label htmlFor='work'>Work</label>
                    </div>
                    <div className='form-group'>
                
                <Card.Footer className="text-center"><input type='submit' className='btn btn-primary'/></Card.Footer>

                </div>
                </form>
            </div>
        )
    }
}