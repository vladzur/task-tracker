<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" @click="cancelAction()"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-primary" @click="okAction()">{{ okText }}</a>
        <a class="button" @click="cancelAction()">{{ cancelText }}</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-card',
  props: {
    title: {
      default: ''
    },
    okText: {
      default: 'OK'
    },
    cancelText: {
      default: 'Cancel'
    }
  },
  methods: {
    cancelAction () {
      this.$emit('close')
    },
    okAction () {
      this.$emit('ok')
    }
  }
}
</script>

<style>

</style>
