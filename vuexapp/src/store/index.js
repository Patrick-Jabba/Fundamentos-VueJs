import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: 'Jon',
      email: 'jon@email.com',
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100,
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200,
      },
      {
        id: 3,
        name: 'meião',
        price: 50,
      },
    ],
    cart: [],
  },
  getters: {
    total(state) {
      //dependencia
      //return um valor 

      return state.cart.reduce((acumulado, item) => acumulado += item.price, 0)
    },
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },

    addProductToCart(state, data) {
      state.cart.push(data);
    },

    removeProductFromCart(state, id) {
      const index = state.cart.findIndex(obj => obj.id === id);
      state.cart.splice(index, 1);
    },
  },
  actions: {
    storeUser({commit}, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          commit('storeUser', data)
        }, 2000)
      })  

      // commit('storeUser', data);
    }
  }
})
