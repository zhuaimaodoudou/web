import {createStore} from 'vuex'

const subModel = createStore({
  namespaced: true,
  state: {
      target: 'xxx'
  },
  
  mutations: {
      updateTarget(state, newTarget){
          state.target = newTarget
      }
  }
})

export default createStore({
  state: {
     // 初始化C和B组件的数据，等待获取
     CMsg: '12',
     BMsg: '2'
  },

  getters: {
      fullName(state){ return `${state.CMsg}-${state.BMsg}` }
  },

  mutations: {
    receiveCMsg(state, payload) {
      // 将A组件的数据存放于state
      state.CMsg = payload.Msg
    },
    receiveBMsg(state, payload) {
      // 将B组件的数据存放于state
      state.BMsg = payload.Msg
    }
  },
  moduels:{ subModel }
})

// const store = createStore({
//    state () {
//      return {
//       // 初始化C和B组件的数据，等待获取
//       CMsg: '12',
//       BMsg: '2'
//      } 
//     },
//      mutations: {
//       receiveBMsg(state, payload) {
//         // 将A组件的数据存放于state
//         state.CMsg = payload.CMsg
//       },
//       receiveCMsg(state, payload) {
//         // 将B组件的数据存放于state
//         state.BMsg = payload.BMsg
//       }
//     }
// })

//export default store;