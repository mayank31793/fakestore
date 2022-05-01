import { createStore } from 'vuex'

export default createStore({
  state: {
    productListInCart:[],
    userEmail: null,
    products:[],
    showPopUp:false
  },
  getters:{
    userEmail: (state) => state.userEmail,

    showPopUp: (state) => state.showPopUp,
  },
  mutations: {
    ADD_PRODUCT(state,data)  {
        state.productListInCart = [...state.productListInCart,JSON.parse(JSON.stringify(data))];
    },
    DELETE_ITEM(state,data){  
      state.productListInCart = JSON.parse(JSON.stringify(state.productListInCart)).filter((res) => res.id != data)
    },
    LOGIN(state,data){  
      state.userEmail = data.userEmail.substring(0, data.userEmail.indexOf("@"));
    },
    LOGOUT(state){  
      state.userEmail = null;
    },
    CALL_ALL_PRODUCTS_OF_CATEGORY(state,data){
      state.products = JSON.parse(JSON.stringify(data));
    },
    CALL_ALL_PRODUCTS(state,data){
      state.products = JSON.parse(JSON.stringify(data));
    },
    POPUP_REQUEST:function(state,data){
      state.showPopUp = data
    }
  },
  actions: {
    addProductInCart:function(context,payload){
      context.commit('ADD_PRODUCT',payload);
    },
    deleteItem:function(context,payload){
      context.commit('DELETE_ITEM',payload);
    },
    login:function(context,payload){
      context.commit('LOGIN',payload);
    },
    logout:function(context){
      context.commit('LOGOUT');
    },
    callAllProductsOfCategory:function(context,payload){
      context.commit('CALL_ALL_PRODUCTS_OF_CATEGORY',payload);
    },
    callAllProducts:function(context,payload){
      context.commit('CALL_ALL_PRODUCTS',payload);
    },
    popupRequest:function(context,payload){
      context.commit('POPUP_REQUEST',payload);
    }
  },
  modules: {
  }
})
