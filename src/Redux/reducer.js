import {
    GET_DETAIL
} from './actions'


//Valores iniciales del estado global 
const initialState = {
    allProducts: [],
    allProductsAux: [],
    details: [],
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        //aca van las acciones que se requieran hacer de redux 

        //Accion de prueba para la funcionalidad de redux 
        case 'TEST_ACTION':
            return {
                ...state
            }

        case 'GET_ALL_PRODUCTS':
            return{
                ...state,
                allProducts: payload,
                allProductsAux: payload
            }

        case GET_DETAIL:
            return {
                ...state,
                details: payload
            }
        case 'APLICAR_FILTROS':
            var arrayFiltrado = [];
            var arrayCatYColor = payload;
            state.allProducts.forEach((producto)=>{
                var arrayColores = producto.colorproducto.split(",");
                arrayCatYColor.forEach((param)=>{
                    if(arrayColores.includes(param) || producto.categoria === param){
                        arrayFiltrado.push(producto);
                    }
                })
                
            })
            return{
                ...state,
                allProducts: arrayFiltrado
            }

        default: 
         return state; 
    }
}