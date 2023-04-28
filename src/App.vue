<template>
  <div class="container">
    <Header />
    <main class="container__main">
      <div class="header-spaceholder"></div>
      <Hero />
      <AboutMe />
      <Certificates />
      <MyWorks />
      <ProyectsWithMe />
      <Contacts />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Header from "@/components/Layout/Header.vue";
import Hero from "@/components/Sections/Hero.vue";
import AboutMe from "./components/Sections/AboutMe.vue";
import Certificates from "./components/Sections/Certificates.vue";
import MyWorks from "./components/Sections/MyWorks.vue";
import Contacts from "./components/Sections/Contacts.vue";
import Footer from "@/components/Layout/Footer.vue";
import ProyectsWithMe from "./components/Sections/ProyectsWithMe.vue";

onMounted(() => {
  function onRem() {
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let iw = iOS ? screen.width : window.innerWidth,
      ih = iOS ? screen.height : window.innerHeight;

    let container_width = 1300; //кол-во пикселей, меньше которого включается резиновость,
    //сюда рекомендуется писать шиирину контейнера в фигме + 150 ~ 200px

    let mobile_width = 320; //Ширина мобильного фрейма в фигме
    switch (true) {
      case iw > container_width:
        document.documentElement.style.fontSize = "1px";
        break;
      case iw > 650:
        document.documentElement.style.fontSize = iw / container_width + "px";
        break;
      case iw < 650:
        document.documentElement.style.fontSize = iw / mobile_width + "px";
        break;
    }
  }

  window.addEventListener("resize", onRem);
  window.addEventListener("DOMContentLoaded", onRem);

  onRem();
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
