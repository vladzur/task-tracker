<template>
  <div>
    <transition name="slide-fade">
      <notification
      v-if="getShowMessage"
      :message="getMessage.text"
      :type="getMessage.type"
      :duration="2000"
      @close="closeMessage"
      />
    </transition>
    <top-menu></top-menu>
    <section class="section">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TopMenu from '@/components/TopMenu'
import Notification from '@/components/commons/Notification'
export default {
  name: 'app',
  components: { Notification, TopMenu },
  computed: {
    ...mapGetters(['getMessage', 'getShowMessage'])
  },
  methods: {
    ...mapActions(['closeMessage'])
  }
}
</script>

<style lang="scss">
@import "./assets/sass/app";
</style>
