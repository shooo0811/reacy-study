import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
//import RaisedButton from 'material-ui/RaisedButton'
//import TextField from 'material-ui/TextField'

//import { postEvent } from '../actions'

class EventsNew extends Component {
    renderField(field){
        const { input, label, type, meta: { tocthed, error } } = field
        return(<div></div>)
    }
    render() {
      return(
        <form>
            <div>
                <Field label='Title' name='title' type='text' component={this.renderField} />
            </div>
            <div>
                <Field label='Body' name='body' type='text' component={this.renderField} />
            </div>
            <div>
                <input type='submit' value='Submit' disabled={false} />
                <Link to='/'>Chancel</Link>
            </div>
        </form>
      )
    }
}

const validation = values => {
    const errors = {}
    return errors
}

export default connect(null, null)(
    reduxForm({ validation, form: 'eventNewForm' })(EventsNew)
)