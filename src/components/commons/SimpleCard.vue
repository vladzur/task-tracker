<template>
  <div class="card">
    <header class="card-header" v-if="title">
      <p class="card-header-title">
        {{ title }}
      </p>
      <a class="card-header-icon" v-if="icon">
        <span class="icon">
          <i :class="icon"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-card',
  props: {
    title: {
      default: null
    },
    icon: {
      default: null
    }
  }
}
</script>

<style>

</style>
