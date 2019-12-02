import React from 'react'
import {connect} from 'react-redux'
import {startGetContacts} from '../actions/contacts'
import {Link } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import image from '../images/undraw_dev_productivity_umsq.png'

class ContactList extends React.Component{

    componentDidMount(){
        this.props.dispatch(startGetContacts())
    }

    render(){
        return(<div className='bckcolor'>
        <div className='background-List jumbotron'>
            <div className=' col-md-10 offset-1' style={{position:'relative',bottom:'30px'}}>
                
                <div className=' ml-5 col-md-6 text-light'><h2>Listing Contact-{this.props.contacts.length}</h2><Link to='/contacts/add'><Button>Add Contact</Button></Link></div>
                <div className='row'>
                    {
                        this.props.contacts.map(contact=>{
                            return (<div className='mt-4 ml-5 col-md-3'>
                            <Card key={contact._id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                            <Card.Title>{contact.name}</Card.Title>
                            <Card.Text>{contact.email}</Card.Text>
                            <Link to={`/contacts/${contact._id}`}><Button variant="primary">Show</Button></Link>
                            </Card.Body>
                          </Card></div>)
                        })
                    }
                </div></div>
            </div>
           </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        contacts:state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)