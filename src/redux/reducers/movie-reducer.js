import {LATEST,POPULAR} from '../types'

const initialState = {
    user : {},
    token : ''
};

const movieReducer = (state = initialState, action) => {
    switch(action.type){

        case LATEST :
            return action.payload;
            
           
        case POPULAR:
            return action.payload
      

        default : 
            return state
    }
}

export default movieReducer;