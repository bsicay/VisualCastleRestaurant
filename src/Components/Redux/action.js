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
  const testUrl = `${baseUrl}/test.json`;
  
  console.log('Intentando cargar db.json desde:', dbUrl);
  
  // Primero probar el archivo de test
  fetch(testUrl)
    .then(r => {
      console.log('Test URL response:', r.status, r.statusText);
      if (r.ok) {
        return r.json();
      }
      throw new Error(`Test failed: ${r.status}`);
    })
    .then(testData => {
      console.log('Test successful:', testData);
      // Si el test funciona, intentar cargar db.json
      return fetch(dbUrl);
    })
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
      // Intentar cargar directamente sin base URL como fallback
      console.log('Intentando cargar db.json sin base URL...');
      fetch('/db.json')
        .then(r => {
          if (!r.ok) throw new Error(`Fallback failed: ${r.status}`);
          return r.json();
        })
        .then(d => {
          console.log('db.json cargado con fallback:', d);
          dispatch(getDataSuccess(d));
        })
        .catch(fallbackErr => {
          console.error('Fallback también falló:', fallbackErr);
          dispatch(getDataFailure());
        });
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