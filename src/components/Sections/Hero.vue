<template>
  <section id="home" class="hero">
    <div class="main-content-wrapper">
      <p class="hero__subtitle renlincode-subtitle">frontend-разработчик</p>
      <h1 class="hero__title renlincode-big-title">Рене Линарес</h1>
      <img
        class="hero__img"
        src="@/assets/images/banner-picture.png"
        alt="Рене Линарес"
      />
      <a target="_blank" href="#about" class="hero__arrows">
        <AnimatedArrows />
      </a>
    </div>
  </section>
</template>

<script setup>
import AnimatedArrows from '../Icons/animatedArrows.vue';
</script>
<style scoped lang="scss">
.hero {
  width: 100%;
  background: $black-color;
  height: 585rem;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 650px) {
    height: 450rem;
  }
  &__subtitle {
    color: $white-color;
    padding: 80rem 0 18rem;
    font-size: 30rem;
    @media only screen and (max-width: 650px) {
      padding-top: 20rem;
      font-size: 16rem;
    }
  }
  &__title {
    color: $white-color;
    width: 430rem;
    @media only screen and (max-width: 650px) {
      width: 100%;
    }
  }
  &__img {
    width: 720rem;
    object-fit: contain;
    position: absolute;
    bottom: -53rem;
    right: 70rem;
    @media only screen and (max-width: 650px) {
      width: 100%;
      right: 50%;
      bottom: -10rem;
      transform: translateX(50%);
    }
  }
  &__arrows {
    position: absolute;
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
