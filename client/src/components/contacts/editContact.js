import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {startShowContact,startEditContact} from '../actions/contact'
import {Card} from 'react-bootstrap'

class EditContact extends React.Component{

    componentDidMount=()=>{
        const id=this.props.match.params.id
        this.props.dispatch(startShowContact(id,this.props))
    }

    handleSubmit=(formData)=>{
        const id=this.props.match.params.id
        this.props.dispatch(startEditContact(id,formData,this.props))
    }
    

    render(){
        return (
            <div className='addBack jumbotron'className='addBack jumbotron'>
                <Card className='col-md-3 offset-2'>
                <Card.Header as='h5' className='mt-2 mb-4 text-center' style={{color:'#8193a9'}}>Edit Customer</Card.Header>
                {Object.keys(this.props.contact).length!==0 && <Form contact={this.props.contact} handleSubmit={this.handleSubmit}/>}
                </Card>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        contact:state.contact
    }
}
export default connect(mapStateToProps)(EditContact)