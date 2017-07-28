<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="control" :class="{'has-icons-left': iconLeft}">
      <input v-if="type !== 'textarea'" ref="input" class="input" :type="type" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)">
      <textarea v-if="type == 'textarea'" ref="input" class="textarea" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)"></textarea>
      <span class="icon is-small is-left" v-if="iconLeft">
        <i class="fa" :class="icon"></i>
      </span>
    </div>
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
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    iconLeft () {
      return this.icon !== ''
    }
  }
}
</script>

<style>

</style>
