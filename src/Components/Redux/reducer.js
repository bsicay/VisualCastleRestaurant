

import * as types from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    foodData:  {}    
}

export const reducer = (state=initialState,{type,payload}) => {

    switch(type){

       case types.GETDATASUCCESS:
            return {
                ...state,
                isLoading: false,
                foodData:  payload
            }
        case types.GETDATAREQUEST:return{
            ...state,isLoading:true,isError:false
        }
        case types.GETDATAFAILURE:return{
            ...state,isLoading:false,isError:true
        }
        default: return state

    }

 
}
