<template>
  <div class="container">
    <Header />
    <main class="container__main">
      <div class="header-spaceholder"></div>
      <Hero />
      <AboutMe />
      <Certificates />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/Layout/Header.vue";
import Hero from "@/components/Sections/Hero.vue";
import AboutMe from "./components/Sections/AboutMe.vue";
import Certificates from "./components/Sections/Certificates.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
