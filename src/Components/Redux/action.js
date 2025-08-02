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

// Datos hardcodeados como fallback
const fallbackData = {
  "Recados": [
    {
     "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Pepián de Pollo",
      "qty": "",
      "price": "75",
      "count": 0
    },
    {
     "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Pepián de Res",
      "qty": "",
      "price": "85",
      "count": 0
    },
    {
     "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Kak'ik (Sopa de Pavo)",
      "qty": "",
      "price": "65",
      "count": 0
    },
    {
     "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Jocón de Pollo",
      "qty": "",
      "price": "60",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Hilachas (Carne Deshebrada)",
      "qty": "",
      "price": "70",
      "count": 0
    }
  ],
  "starter": [
    {
     "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Rellenitos de Plátano",
      "qty": "",
      "price": "25",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Chiles Rellenos",
      "qty": "",
      "price": "30",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Paches (Tamal de Papa)",
      "qty": "",
      "price": "20",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Tamales Colorados",
      "qty": "",
      "price": "15",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Empanadas de Cambray",
      "qty": "",
      "price": "18",
      "count": 0
    }
  ],
  "maincourse": [
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Subanik (Estofado de Pollo)",
      "qty": "",
      "price": "80",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Hilachas", 
      "qty": "",
      "price": "70",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Jocón de Pollo",
      "qty": "",
      "price": "60",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Kak'ik",
      "qty": "",
      "price": "65",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Pepián de Res",
      "qty": "",
      "price": "85",
      "count": 0
    }
  ],
  "maincoursev": [
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Chiles Rellenos Vegetarianos",
      "qty": "",
      "price": "30",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Fiambre Vegetariano",
      "qty": "",
      "price": "50",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Revoltijo de Papa",
      "qty": "",
      "price": "35",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Atol de Elote",
      "qty": "",
      "price": "15",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Tamales de Elote",
      "qty": "",
      "price": "20",
      "count": 0
    }
  ],
  "Complemento": [
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Pan Chapín",
      "qty": "",
      "price": "10",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Chuchitos",
      "qty": "",
      "price": "15",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Tostadas de Maíz",
      "qty": "",
      "price": "8",
      "count": 0
    },
    {
      "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Pan de Elote",
      "qty": "",
      "price": "12",
      "count": 0
    },
    {
        "img": "https://www.guatemala.com/fotos/201805/Pepian-guatemalteco-acariciamesp1-885x500.jpg",
      "name": "Pan de Banano",
      "qty": "",
      "price": "10",
      "count": 0
    }
  ]
};

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
      console.log('Usando datos hardcodeados como fallback...');
      // Usar datos hardcodeados como fallback
      dispatch(getDataSuccess(fallbackData));
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