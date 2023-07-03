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
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useI18n } from "vue-i18n";

import Header from "@/components/Layout/Header.vue";
import Hero from "@/components/Sections/Hero.vue";
import AboutMe from "./components/Sections/AboutMe.vue";
import Certificates from "./components/Sections/Certificates.vue";
import MyWorks from "./components/Sections/MyWorks.vue";
import Contacts from "./components/Sections/Contacts.vue";
import Footer from "@/components/Layout/Footer.vue";
import ProyectsWithMe from "./components/Sections/ProyectsWithMe.vue";

// const { t } = useI18n();
// useHead({
//   title: computed(() => t('seo_metadata.title')),
//   meta: [
//     {
//       name: 'description',
//       content: computed(() => t('seo_metadata.description'))
//     },
//     {
//       property: 'og:title',
//       content: computed(() => t('seo_metadata.title'))
//     },
//     {
//       property: 'og:description',
//       content: computed(() => t('seo_metadata.description'))
//     },
//   ]
// })
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
