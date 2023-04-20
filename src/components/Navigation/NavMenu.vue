<template>
  <nav class="nav-menu" :class="{ 'nav-menu--open': open }" >
    <ul class="nav-menu__list">
      <li v-for="link in links">
        <a class="underline" :href="link.href" @click="$emit('selectedNavItem')">{{
          link.name
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { reactive } from "vue";

const links = reactive([
  {
    name: "Обо мне",
    href: "#about",
  },
  {
    name: "Сертификаты",
    href: "#certificates",
  },
  {
    name: "Мои работы",
    href: "#works",
  },
  {
    name: "Проекты",
    href: "#proyects",
  },
  {
    name: "Контакты",
    href: "#contacts",
  },
]);

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["selectedNavItem"]);
</script>

<style scoped lang="scss">
.nav-menu {
  @media only screen and (max-width: 650px) {
    display: grid;
    place-content: center;
    position: fixed;
    left: 0;
    top: calc(-100vh + 66rem);
    z-index: -1;
    width: 100%;
    height: calc(100vh - 60rem);
    transition: transform 600ms ease-out;
  }
  &__list {
    list-style: none;
    display: flex;
    gap: 30rem;
    @media only screen and (max-width: 650px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20rem;
      line-height: 22rem;
      font-weight: 600;
    }
    a {
      color: $white-color;
    }
  }
  &--open {
    @media only screen and (max-width: 650px) {
      transform: translateY(calc(100vh));
      overflow-y: scroll;
    }
  }
}
</style>
