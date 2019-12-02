const contactInititalState={}

const ContactReducer=(state=contactInititalState,action)=>{
    switch(action.type){
        case "SHOW_CONTACT":{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default ContactReducer