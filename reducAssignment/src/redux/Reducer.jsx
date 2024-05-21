import { types } from "./Action"

const initialState={
    count:0
}


const Countreducer =(state=initialState,action)=>{
    switch (action.type){
        case types.INCREMENT:
            return {
                ...state,
                count:state.count+1
            }
        case types.DECREMENT:
            if(state.count>0){
            return{
                ...state,
                count:state.count-1
            }
        }
        default:
            return state
    }
}

export default Countreducer