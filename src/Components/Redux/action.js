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

  // Función para obtener la URL base correcta
  const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      // En producción (GitHub Pages)
      return '/VisualCastleRestaurant';
    }
    // En desarrollo
    return '';
  };

  const baseUrl = getBaseUrl();
  const dbUrl = `${baseUrl}/db.json`;
  
  console.log('Intentando cargar db.json desde:', dbUrl);
  
  fetch(dbUrl)
    .then(r => {
      if (!r.ok) {
        console.error('Error al cargar db.json:', r.status, r.statusText);
        throw new Error(`No se pudo cargar db.json (${r.status})`);
      }
      return r.json();
    })
    .then(d => {
      console.log('db.json cargado exitosamente:', d);
      dispatch(getDataSuccess(d));
    })
    .catch(err => {
      console.error('Error al cargar db.json:', err);
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