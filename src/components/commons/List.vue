<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columns" @click="sortBy(column.field)" :class="{'active': sortKey == column.field}">
          {{ column.label }}
          <span class="arrow" :class="sortOrders[column.field] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData" @click="clickEventDispatcher(entry)" class="is-link">
        <td v-for="column in columns">
          {{entry[column.field]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'list',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data () {
    let sortOrders = {}
    this.columns.forEach((column) => {
      sortOrders[column.field] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData () {
      let sortKey = this.sortKey
      let filterKey = this.filterKey && this.filterKey.toLowerCase()
      let order = this.sortOrders[sortKey] || 1
      let data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  methods: {
    sortBy (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    clickEventDispatcher (element) {
      this.$emit('itemSelected', element)
    }

  }

}
</script>

<style>
.is-link {
  cursor: pointer
}

.active {
  color: black;
  background-color: #e8e7e6;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.3;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #000;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #000;
}
</style>
