<template>
  <div :class="{ 'content-transparent': !this.$store.state.languageIsInit }">
    <MenuComponent />

    <transition name="fade" mode="out-in">
      <div
        v-if="this.$store.state.showImg && this.$store.state.projectsOn"
        :style="this.$store.state.showImg"
        class="show-photo"
      >
      </div>
      <Loader v-else-if="this.$store.state.loading"/>
    </transition>

    <!-- <div

        style="background-image:url(/images/projects/here_was_vasya/1.jpg)"
        class="show-photo"
      >
      </div> -->

    <div :class="{ 'content-out': this.$store.state.projectsOn }" class="container">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import MenuComponent from '~/components/Menu.vue'
import Loader from '~/components/Loader.vue'

export default {
  components: {
    MenuComponent,
    Loader,
  },
}
</script>
