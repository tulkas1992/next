const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  characters: {
    all: `${API}/api/character`,
    single: (id) => `${API}/api/character/${id}/`,
    getMulti: `${API}/api/categories/`,
    findCharacter: (params) => API+params

  },
  location:{
    all: `${API}/api/location`,
  },
  episode:{
    all: `${API}/api/episode`,
  },

};

export default endPoints;


// products: {
//     funcion
//     getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
//     estatica
//     getCategoriesList: `${API}/api/${VERSION}/categories/`,
   
//   },