<template>
  <div class="field has-addons">
    <p class="control">
      <input class="input" type="text" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)">
    </p>
    <p class="control">
      <a class="button is-info">
        {{ searchButton }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'vz-search-input',
  props: {
    value: [String],
    placeholder: {
      type: String,
      default: ''
    },
    searchButton: {
      type: String,
      default: 'Find'
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
