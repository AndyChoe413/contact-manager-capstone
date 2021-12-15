import React, { useReducer } from 'react'
import axios from 'axios'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../actionTypes'


const ContactState = props => {
    const initialState = {
        contacts: [],
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState)

    //get contacts
    const getContacts = async () => {
       
        try {
            const res = await axios.get('api/contacts')

            dispatch({
                type: GET_CONTACTS,
                payload: res.data.contacts
            })

        } catch (err) {
            console.log('err.message: ', err.message)
            dispatch({
                type: CONTACT_ERROR,
                payload: err.message,
            })
        }
   }


    //add contact
    const addContact = async contact => {

        try {
            const res = await axios.post('/api/contacts', contact)

            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            })

        } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.message
            })
        }
    }

    //delete contact 
    const deleteContact = async id => {
          try {
             await axios.delete(`/api/contacts/${id}`)

              dispatch({
                  type: DELETE_CONTACT,
                  payload: id
              })

        } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.message
            })
        }
     
    }
    
    //update
    const updateContact = async contact => {
        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact)

            dispatch({
                type: UPDATE_CONTACT,
                payload: res.data
            })

        } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.message
            })
        }
    }
    
    //clear contact
    const clearContacts = () => {
        dispatch({type: CLEAR_CONTACTS})
    }

    //set new
     const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact})
    }

    //clear contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }


    //filter
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    }

    //clear filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
                getContacts,
                clearContacts
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState