<template>
  <div id="app" class="app-background">
    <NavBarComponent />
    <div class="content">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    FooterComponent
  }
}
</script>

<style>
.app-background {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url('@/assets/background.jpg') no-repeat center center fixed; /* Background image */
  background-size: cover; /* Cover the entire area */
}

.content {
  flex: 1; /* Ensures that the content area takes up the remaining space */
}
</style>