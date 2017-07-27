<template>
  <article class="message">
    <div class="message-header">
      <p>{{ title }}</p>
      <button class="delete" @click="close()"></button>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
