import { INCREMENT, DECREMENT } from '../actions'

const initialStae = { value: 0 }

export default ( state = initialStae, action ) => {
    switch(action.type){
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }

    }
}