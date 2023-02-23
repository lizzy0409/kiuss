<template>
  <div class="loader">
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style scoped>
.loader {
  display: inline-block;
  transform: translateZ(1px);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.loader > div {
  display: inline-block;
  width: 35px;
  height: 35px;
  margin: 8px;
  border-radius: 50%;
  background: black;
  animation: loader 4.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes loader {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }

  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }

  100% {
    transform: rotateY(3600deg);
  }
}
</style>