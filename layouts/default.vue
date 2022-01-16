<template>
  <div v-bind:class="{ 'content-transparent': !this.$store.state.languageIsInit }">
    <menu-component />

    <transition name="fade">
      <div
        v-if="this.$store.state.showImg && this.$store.state.projectsOn"
        v-bind:style="this.$store.state.showImg"
        class="show-photo"
      ></div>
    </transition>

    <div v-bind:class="{ 'content-out': this.$store.state.projectsOn }" class="container">
      <transition name="slide-fade">
        <!-- <router-view /> -->
        <nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
  import MenuComponent from '~/components/Menu.vue'

  export default {
    components: {
      MenuComponent,
    },
  }
</script>
