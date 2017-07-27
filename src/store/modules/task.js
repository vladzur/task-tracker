import * as types from '../mutation-types'

// initial state
const state = {
  tasks: [],
  timeCounter: 0
}

// getters
const getters = {
  taskList: state => {
    return state.tasks
  }
}

// actions
const actions = {
  addTask: ({commit}, task) => {
    commit(types.ADD_TASK, task)
  },
  editTask: ({commit}, payload) => {
    commit(types.EDIT_TASK, payload)
  }
}

// mutations
const mutations = {
  [types.ADD_TASK]: (state, task) => {
    state.tasks.push(task)
  },
  [types.EDIT_TASK]: (state, payload) => {
    let idx = state.tasks.indexOf(payload.oldValue)
    state.tasks.splice(idx, 1, payload.newValue)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
