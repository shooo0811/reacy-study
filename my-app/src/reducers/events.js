import _ from 'lodash'
import { READ_EVENTS, CREATE_EVENT } from '../actions'

export default (events = {}, action) => {
    switch(action.type){
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case CREATE_EVENT:
        default:
            return events
    }
}