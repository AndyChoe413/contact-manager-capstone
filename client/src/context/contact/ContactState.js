import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'andy choe',
                email: 'andyc@gmail.com',
                phone: '111-222-3333',
                type: 'personal'
            },
            {
                id: 1,
                name: 'andy cholo',
                email: 'andycholo@gmail.com',
                phone: '111-222-3333',
                type: 'professional'
            },
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState)

    //add contact
    const addContact = contact => {
        contact.id = uuid.v4()
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    //delete 

    //set new

    //clear contact

    //update

    //filter

    //clear filter


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState