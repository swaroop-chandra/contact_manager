import React from 'react'
// import axios from '../../config/axios'
import {startCreateContacts} from '../actions/contacts'
import {connect} from 'react-redux'
import Form from './Form'
import { Card } from 'react-bootstrap'

class AddContact extends React.Component{
    handleSubmit=(formData)=>{
        this.props.dispatch(startCreateContacts(formData,this.props))
    }
    render(){
        return (
            <div className='addBack jumbotron'>
                <Card className='col-md-3 offset-2'>
                <Card.Header as='h5' className='mt-2 mb-4 text-center' style={{color:'#8193a9'}}>Add Contact</Card.Header>

                <Form handleSubmit={this.handleSubmit}/>
                </Card>
            </div>
        )
    }
}

export default connect()(AddContact)