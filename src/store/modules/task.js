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
  },
  fetchTasks: ({commit}) => {
    commit(types.FETCH_TASKS)
  }
}

// mutations
const mutations = {
  [types.ADD_TASK]: (state, task) => {
    state.tasks.push(task)
    window.localStorage.setItem('task-tracker', JSON.stringify(state.tasks))
  },
  [types.EDIT_TASK]: (state, payload) => {
    let idx = state.tasks.indexOf(payload.oldValue)
    state.tasks.splice(idx, 1, payload.newValue)
    window.localStorage.setItem('task-tracker', JSON.stringify(state.tasks))
  },
  [types.FETCH_TASKS]: (state) => {
    let tasks = JSON.parse(window.localStorage.getItem('task-tracker'))
    if (Array.isArray(tasks)) {
      state.tasks = tasks
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
