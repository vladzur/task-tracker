<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <p class="control">
      <span class="select">
        <select :value="value" @change="setValue($event.target.value)">
          <option v-for="option in options" :value="option.value">{{ option.text }}</option>
        </select>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: null
    },
    label: {
      default: ''
    },
    options: {
      default: [
        { text: 'Select', value: 1 }
      ]
    },
    selected: {
      default: null
    }
  },
  methods: {
    setValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style>

</style>
