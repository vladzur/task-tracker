<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <p class="control" :class="{'has-icons-left': iconLeft}">
      <input ref="input" class="input" :type="type" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)">
      <span class="icon is-small is-left" v-if="iconLeft">
        <i class="fa" :class="icon"></i>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'vz-input',
  props: {
    value: [String],
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    iconLeft: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'fa-user'
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>

</style>
