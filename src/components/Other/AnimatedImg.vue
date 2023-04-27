<template>
  <div class="animated-img">
    <div class="animated-img__words">
      <span class="word1">SASS/SCSS</span>
      <span class="word2">&#60/&#62</span>
      <span class="word3">Vue.js</span>
      <span class="word4">( )</span>
      <span class="word5">CSS3</span>
      <span class="word6">]</span>
      <span class="word7">&#60</span>
      <span class="word8">HTML5</span>
      <span class="word9">;</span>
      <span class="word10">{ }</span>
      <span class="word11">JavaScript</span>
      <span class="word12">Nuxt.js</span>
      <span class="word13">{</span>
      <span class="word14">/</span>
      <span class="word15">&#60/&#62</span>
    </div>
    <figure>
      <img src="@/assets/images/about-me-img_simple.png" alt="Рене Линарес" />
    </figure>
  </div>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const gsapAnimateEl = (selector, scrub, translateY, rotate) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      scrub,
    },
    y: translateY,
    rotation: rotate,
    ease: true,
  });
};

onMounted(() => {
  gsapAnimateEl(".word1", 2, 110, 54);
  gsapAnimateEl(".word2", 3, 130, -148);
  gsapAnimateEl(".word3", 5, 120, 62);
  gsapAnimateEl(".word4", 3, 170, 80);
  gsapAnimateEl(".word5", 6, 100, 74);
  gsapAnimateEl(".word6", 4, 150, -57);
  gsapAnimateEl(".word7", 3, 70, 48);
  gsapAnimateEl(".word8", 5, 140, 76);
  gsapAnimateEl(".word9", 2, 125, -103);
  gsapAnimateEl(".word10", 6, 78, 93);
  gsapAnimateEl(".word11", 3, 117, -58);
  gsapAnimateEl(".word12", 4, 82, 42);
  gsapAnimateEl(".word13", 2, 110, -125);
  gsapAnimateEl(".word14", 5, 146, 25);
  gsapAnimateEl(".word15", 6, 89, 61);
});
</script>

<style scoped lang="scss">
.animated-img {
  position: relative;
  figure {
    display: flex;
    img {
      width: 100%;
      object-fit: contain;
      z-index: 0;
    }
  }
  span {
    position: absolute;
    font-family: "Open Sans", sans-serif;
    font-size: 20rem;
    color: $main-color;
    font-weight: 600;
    z-index: 1;
    @media only screen and (max-width: 650px) {
      font-size: 12rem;
    }
    &.word1 {
      top: 13rem;
      right: 62rem;
      transform: rotate(32deg) scale(1.2);
      @media only screen and (max-width: 650px) {
        top: 21rem;
        right: 54rem;
      }
    }
    &.word2 {
      right: 74rem;
      top: 88rem;
      transform: rotate(-8deg) scale(1.6);
      @media only screen and (max-width: 650px) {
        right: 45rem;
        top: 66rem;
      }
    }
    &.word3 {
      right: 76rem;
      top: 176rem;
      transform: rotate(20deg) scale(1.8);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        right: 53rem;
        top: 109rem;
      }
    }
    &.word4 {
      right: 18rem;
      top: 131rem;
      transform: rotate( -9deg) scale(1.7);
      @media only screen and (max-width: 650px) {
        right: 14rem;
        top: 111rem;
      }
    }
    &.word5 {
      right: 38rem;
      top: 249rem;
      transform: rotate(-46deg) scale(1.7);
      @media only screen and (max-width: 650px) {
        right: 25rem;
        top: 187rem;
      }
    }
    &.word6 {
      right: 10rem;
      bottom: 176rem;
      transform: rotate(20deg) scale(2);
      @media only screen and (max-width: 650px) {
        right: 14rem;
      bottom: 60rem;
      }
    }
    &.word7 {
      right: 42rem;
      bottom: 72rem;
      transform: rotate(116deg) scale(1.6);
      @media only screen and (max-width: 650px) {
        right: 39rem;
        bottom: 18rem;
      }
    }
    &.word8 {
      left: 95rem;
      top: 0;
      transform: rotate(-37deg) scale(1.7);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        left: 64rem;
        top: 3rem;
      }
    }
    &.word9 {
      left: 58rem;
      top: 61rem;
      transform: rotate(-37deg) scale(2);
      @media only screen and (max-width: 650px) {
        left: 45rem;
        top: 40rem;
      }
    }
    &.word10 {
      left: 91rem;
      top: 125rem;
      transform: rotate(23deg) scale(1.5);
      @media only screen and (max-width: 650px) {
        left: 56rem;
        top: 82rem;
      }
    }
    &.word11 {
      top: 168rem;
      left: 34rem;
      transform: rotate(-3deg) scale(1.2);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        top: 111rem;
        left: 23rem;
      }
    }
    &.word12 {
      bottom: 224rem;
      left: 10rem;
      transform: rotate(-20deg) scale(1.9);
      @media only screen and (max-width: 650px) {
        bottom: 127rem;
        left: 7rem;
      }
    }
    &.word13 {
      bottom: 170rem;
      left: 49rem;
      transform: rotate(-18deg) scale(2.2);
      @media only screen and (max-width: 650px) {
        bottom: 89rem;
        left: 37rem;
      }
    }
    &.word14 {
      bottom: 121rem;
      left: 10rem;
      transform: rotate(5deg) scale(1.7);
      @media only screen and (max-width: 650px) {
        bottom: 53rem;
        left: 6rem;
      }
    }
    &.word15 {
      bottom: 64rem;
      left: 38rem;
      transform: rotate(-24deg) scale(1.7);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        bottom: 27rem;
        left: 26rem;
      }
    }
  }
}
</style>
