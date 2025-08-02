import * as types from "./actionTypes"

const getDataSuccess =(payload)=>{
    return {type:types.GETDATASUCCESS,payload}
}
const getDataRequest =()=>{
    return {type:types.GETDATAREQUEST}
}
const getDataFailure =()=>{
    return {type:types.GETDATAFAILURE}
}






export const getData = () => dispatch => {
  dispatch(getDataRequest());

  // Ahora carga /db.json desde public/db.json
  fetch("/db.json")
    .then(r => {
      if (!r.ok) throw new Error("No se pudo cargar db.json");
      return r.json();
    })
    .then(d => dispatch(getDataSuccess(d)))
    .catch(err => {
      console.error(err);
      dispatch(getDataFailure());
    });
};



// export const getData = () =>(dispatch)=>{
//     // console.log("data inner fun")
//     dispatch(getDataRequest())
//     fetch("https://apimockeradnanchicken.onrender.com/adnanChickendata")
//         .then((r) => {
//           return r.json();
//         })
//         .then((d) => {
       
         
//             dispatch(getDataSuccess(d))
//         })
//         .catch(err =>{
//             dispatch(getDataFailure())
//         })

// }