import React from 'react'
// import axios from '../../config/axios'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {startShowContact,startDeleteContact} from '../actions/contact'
import { Card ,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

class ShowContact extends React.Component{
       componentDidMount=()=>{
        const id=this.props.match.params.id
        this.props.dispatch(startShowContact(id,this.props))
    }

    handleRemove=()=>{
    const id=this.props.match.params.id
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
            this.props.dispatch(startDeleteContact(id,this.props))
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }

    backHandle=()=>{
        this.props.history.push('/contacts')
    }
    render(){
        return (
            <div className='showBack jumbotron'>
                <div className='col-md-4 offset-4'>
                <Card className='shadow-sm p-2 mb-5 rounded' >
                <Card.Header className='text-center' as="h5">Show Contact Info</Card.Header>
                <Card.Body>
                <Card.Title className='text-center'>{this.props.contact.name}</Card.Title>
                <Card.Text className='text-center'>{this.props.contact.email}</Card.Text>
                <footer className="blockquote-footer text-center mb-3 text-dark">
                {this.props.contact.mobile} - <cite title="Source Title">{this.props.contact.category}</cite></footer>
                <div className='col-md-11 offset-1'>
                <Link to={`/contacts/edit/${this.props.match.params.id}`}>
                <Button className='ml-1' variant="primary">   Edit  </Button></Link>
                <Button className='ml-4' onClick={this.handleRemove}>remove</Button>
                <Button className='ml-4' onClick={this.backHandle}>back</Button>
                </div>
                </Card.Body>
                </Card>
            </div></div>


        )
    }
}

const mapStateToProps=(state)=>{
    return{
        contact:state.contact
    }
}
export default connect(mapStateToProps)(ShowContact)