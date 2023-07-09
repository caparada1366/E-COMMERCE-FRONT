//import arrayObjetos from "../Helpers/arrayObjetos"
//import axios from "axios"
import AuthService from "../Services/AuthService";
//import arrayObjetos from "../Helpers/arrayObjetos";
import axios from "axios";

export const GET_DETAIL = "GET_DETAIL";
export const SET_USUARIO_DETAIL = "SET_USUARIO_DETAIL";
export const CLEAR_USUARIO_DETAIL = "CLEAR_USUARIO_DETAIL";

export function getAllProducts(pagina) {
  const linkFelipe = `https://commerce-back-2025.up.railway.app/producto?page=${pagina}`;
  const linkBackLocal = "http://localhost:3001/productos/productos";
  return async (dispatch) => {
    const data =
      //.content;           //para el local
      (await axios.get(linkFelipe)).data; //para el deploy
    return dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: data,
    });
  };
}

export function getAllCategorias() {
  const linkFelipe = `https://commerce-back-2025.up.railway.app/categorias`;
  const linkBackLocal = "http://localhost:3001/productos/productos";
  return async (dispatch) => {
    const data = (await axios.get(linkFelipe)).data;
    //.content;           //para el local
    //para el deploy
    return dispatch({
      type: "GET_ALL_CATEGS",
      payload: data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    const json = await axios(
      //https://commerce-back-2025.up.railway.app/producto/3
      `https://commerce-back-2025.up.railway.app/producto/${id}`
    );
    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}

export function aplicarFiltros(categoriasYcolores) {
  return {
    type: "APLICAR_FILTROS",
    payload: categoriasYcolores,
  };
}

export function addFavorites(producto) {
  return {
    type: "ADD_FAVORITES",
    payload: producto,
  };
}

export const log_in = (data) => (dispatch) => {
  return AuthService.Login(data);
};

export function removeFavorites(producto) {
  return {
    type: "REMOVE_FAVORITES",
    payload: producto,
  };
}

export function addCarrito(producto) {
  return {
    type: "AGREGAR_AL_CARRITO",
    payload: producto,
  };
}
export function obtenerCategoriaPorId(id) {
  return async function (dispatch) {
    const json = await axios(
      `https://commerce-back-2025.up.railway.app/categorias/${id}`
    );
    return dispatch({
      type: "NAME_CATEGORIA",
      payload: json.data,
    });
  };
}

export function buscarProducto(pagina, producto) {
  const linkFelipe = `https://commerce-back-2025.up.railway.app/producto/buscar?prod=${producto}&cate=&page=${pagina}`;
  const linkBackLocal = "http://localhost:3001/productos/productos";
  return async (dispatch) => {
    const data =
      //.content;           //para el local
      (await axios.get(linkFelipe)).data; //para el deploy
    return dispatch({
      type: "BUSCAR_PRODUCTO",
      payload: { data: data, prod: producto },
    });
  };
}

export function limpiarFiltroyBusqueda() {
  return {
    type: "LIMPIAR_TODO",
  };
}

// export function getAllUsuarios(pagina) {
//   const linkFelipe = `?page=${pagina}`;

//   return async (dispatch) => {
//     const data =
//       //.content;           //para el local
//       (await axios.get(linkFelipe)).data; //para el deploy
//     return dispatch({
//       type: "GET_ALL_USUARIOS",
//       payload: data,
//     });
//   };
// }

export function getAllUsuarios(pagina) {
  const linkFelipe = `https://commerce-back-2025.up.railway.app/usuarios?page=${pagina}`;

  return async (dispatch) => {
    const data =
      //.content;           //para el local
      (await axios.get(linkFelipe)).data; //para el deploy

    return dispatch({
      type: "GET_ALL_USUARIOS",
      payload: data,
    });
  };
}

export function usuarioId(id) {
  return async function (dispatch) {
    const json = await axios(
      `https://commerce-back-2025.up.railway.app/usuarios/${id}`
    );
    console.log(json.data);
    return dispatch({
      type: "USUARIO_ID",
      payload: json.data,
    });
  };
}

export const setUsuarioDetail = (usuario) => {
  return {
    type: "SET_USUARIO_DETAIL",
    payload: usuario,
  };
};
