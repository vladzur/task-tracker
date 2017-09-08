<template>
  <div class="container">
    <div class="box">
      <h1 class="title">About</h1>
      <p>Ipsum sunt duis labore sit reprehenderit aute adipisicing sint ut amet est ex ipsum reprehenderit. Id sint consectetur reprehenderit aliquip Lorem laboris non veniam pariatur duis sint. Dolor proident qui cillum pariatur fugiat minim enim ullamco Lorem. Proident nisi amet veniam occaecat minim irure in. Sint commodo pariatur exercitation deserunt. Commodo anim est deserunt ea commodo excepteur sit exercitation laborum nulla.</p>
      <a class="button is-primary" @click="fire">Fire!</a>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'about',
  methods: {
    ...mapActions(['setMessage', 'showMessage']),
    fire () {
      this.setMessage({type: 'is-info', text: 'This is just an example!'})
      this.showMessage()
    }
  }
}
</script>
