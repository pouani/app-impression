<template>

<div class="flex">
  <side-bar />
  <div class="flex-1">
    <app-header />
    <router-view />
  </div>
</div>

</template>

<script>

import SideBar from './views/SideBar.vue';
import AppHeader from './views/AppHeader.vue';
export default {
  name: 'App',
  components: {
    SideBar,
    AppHeader,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  transition: .5s;
}

@media (prefers-color-schema: light) {
  #app{
    background-color: #fff;
    color: #333;
  }
}
@media (prefers-color-schema: dark) {
  #app{
    background-color: #333;
    color: #fff;
  }
}
</style>
