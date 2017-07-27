<template>
  <div class="notification over-all" :class="type">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'notification',
  props: {
    message: {
      default () { return 'This is a message' }
    },
    type: {
      default () { return 'is-info' }
    },
    duration: {
      default () { return 3000 }
    }
  },
  methods: {
    emitClose () {
      this.$emit('close')
    }
  },
  mounted () {
    setInterval(() => {
      this.emitClose()
    }, this.duration)
  }
}
</script>

<style scoped>
.over-all {
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  width: 600px;
  margin-top: 1em;
  margin-right: 0.5em;
}
</style>
