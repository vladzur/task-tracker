<template>
  <div class="columns">
    <div class="column is-2">
      <div class="box expand-height">
        <h1 class="title">New Task</h1>
        <vz-input placeholder="Name" v-model="task.name"></vz-input>
        <vz-input type="textarea" placeholder="Description" v-model="task.text"></vz-input>
        <a class="button is-primary" @click="saveTask">Add</a>
      </div>
    </div>
    <div class="column">
      <h1 class="title">Task List</h1>
      <vz-input v-model="filterKey" icon="fa-search"></vz-input>
      <list :data="taskList" :columns="columns" :filterKey="filterKey" @itemSelected="showElement"/>
    </div>
    <modal-card :class="{'is-active': showModal}" @ok="updateTask" @close="closeModal">
      <vz-input placeholder="Name" v-model="currentTask.name"></vz-input>
      <vz-input type="textarea" placeholder="Description" v-model="currentTask.text"></vz-input>
    </modal-card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Task from '../models/Task'
import VzInput from '@/components/commons/VzInput'
import VzSearchInput from '@/components/commons/VzSearchInput'
import List from '@/components/commons/List'
import ModalCard from '@/components/commons/ModalCard'
export default {
  components: { List, ModalCard, VzSearchInput, VzInput },
  data () {
    return {
      task: new Task(),
      currentTask: new Task(),
      selectedTask: null,
      columns: [
        {label: 'Title', field: 'name'},
        {label: 'Descriprion', field: 'text'},
        {label: 'Duration', field: 'duration'}
      ],
      showModal: false,
      filterKey: ''
    }
  },
  methods: {
    ...mapActions(['addTask', 'editTask', 'setMessage', 'showMessage']),
    saveTask () {
      this.addTask(this.task)
      this.task = new Task()
      this.setMessage({type: 'is-success', text: 'New task added!'})
      this.showMessage()
    },
    showElement (item) {
      this.selectedTask = item
      this.currentTask = Object.assign({}, item)
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    updateTask () {
      this.editTask({oldValue: this.selectedTask, newValue: this.currentTask})
      this.currentTask = new Task()
      this.setMessage({type: 'is-success', text: 'Task updated'})
      this.showMessage()
      this.closeModal()
    }
  },
  computed: {
    ...mapGetters(['taskList'])
  }
}
</script>
