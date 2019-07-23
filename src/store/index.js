import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    itemList: [],
    status: -1
  },
  mutations: {
    pushItem(state, item) {
      state.itemList.push(item)
    },
    updateMsg(state, updateItem) {
      // state.itemList[updateItem.index].contentMsg = updateItem.contentMsg
      state.itemList.filter((item) => item.id == updateItem.id)[0].contentMsg = updateItem.contentMsg
    },
    updateStatus(state, updateItem) {
      state.itemList[updateItem.index].isFinish = updateItem.isFinish
    },
    showListChange(state, showIndex) {
      state.status = showIndex
    },
    updateItemList(state,newList){
      state.itemList = newList
    },
    updateItem(state,updateItem){
      state.itemList.filter((item) => item.id == updateItem.id)[0].contentMsg = updateItem.contentMsg
      state.itemList.filter((item) => item.id == updateItem.id)[0].isFinish = updateItem.isFinish
    }
  },
  getters: {
    getShowList: (state) => (status) => {
      if (status === -1) {
        return state.itemList
      } else {
        return state.itemList.filter((item) => {
          return item.isFinish === Boolean(status)
        })
      }
    }
  }
})

