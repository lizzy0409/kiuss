<template>
  <div class="hello"></div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — is a so-called art group | Кюс — т.н. арт-группа',
      meta: [
        { property: 'og:title', content: 'Kiuss — is a so-called art group | Кюс — т.н. арт-группа' },
        { property: 'og:image', content: '../favicons/og.jpg' },
      ],
    },
  }
</script>

<style lang="sass" scoped>
  .hello
    position: absolute
    background-image: url(../static/favicons/bg.jpg)
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    width: 100%
    margin-top: 0px
    top: 8px
    height: calc(100vh - 15px)
    @media (max-width: 1234px)
      height: 100vh
      top: 0
</style>
