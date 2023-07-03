<template>
  <header :style="`background: ${color}; box-shadow: ${shadow}`" class="header">
    <div :style="`background: ${color}`" class="header__content main-content-wrapper">
      <BurgerButton
        class="desktop-hidden"
        :open="menuOpen"
        @click.native="menuOpen = !menuOpen"
      />
      <a href="#home" @click="menuOpen = false" class="header__logo">
        <RenlinCodeLogo />
      </a>

      <NavMenu
        :style="`background: ${clientWidth <= 650 ? color : 'transparent'}`"
        :open="menuOpen"
        @selectedNavItem="menuOpen = false"
      />
      <LangSelector class="mobile-hidden" />
      <a target="_blank" class="header__phone opacity" href="tel:+79373217299">
        <contactIcon type="phone" class="header__phone-icon" />
        <span class="mobile-hidden">+7 (937) 321 72 99</span>
      </a>
    </div>
  </header>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BurgerButton from "../Buttons/BurgerButton.vue";
import NavMenu from "../Navigation/NavMenu.vue";
import contactIcon from "../Icons/contactIcon.vue";
import RenlinCodeLogo from "../Logos/renlinCodeLogo.vue";
import LangSelector from "../Buttons/LangSelector.vue";

import { ref, watch, onMounted } from "vue";

const menuOpen = ref(false);
watch(menuOpen, (value) => {
  document.querySelector("body").style.overflowY = value ? "hidden" : "scroll";
});

const clientWidth = ref(null);
const color = ref("#151F28");
const shadow = ref("none");

const gsapStartHandler = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".header", {
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: "+=30rem",
      toggleActions: "restart none reverse none",
      onLeave: () => {
        color.value = "#0f1b1f";
        shadow.value = "4rem 0rem 20rem rgba(0, 0, 0, 0.81)";
      },
      onEnterBack: () => {
        color.value = "#151F28";
        shadow.value = "none";
      },
    },
  });

  const showHeader = gsap
    .from(".header", {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    onUpdate: (self) => {
      self.direction === -1 ? showHeader.play() : showHeader.reverse();
    },
  });
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  gsapStartHandler();
});
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  background: $black-color;
  transition: all 360ms ease-out;
  z-index: 2;
  &__content {
    height: 70rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 360ms ease-out;
  }

  &__logo {
    width: 177rem;
    height: 23rem;
    @media only screen and (max-width: 650px) {
      width: 150rem;
      height: 20rem;
    }
  }
  &__phone {
    display: flex;
    align-items: center;
    gap: 14rem;
    &-icon {
      width: 20rem;
      height: 20rem;
    }
    span {
      color: $white-color;
    }
  }
}
</style>
