<template>
  <section id="about" class="about-me renlincode-section">
    <div class="about-me__content main-content-wrapper">
      <h2 class="about-me__title renlincode-title section-title">Обо мне</h2>
      <div class="about-me__wrapper">
        <AnimatedImg />
        <div class="about-me__right">
          <p class="about-me__right-text">
            Привет! Меня зовут Рене, и я Frontend разработчик с опытом работы 2 года.<br />Я
            профессионально владею HTML, CSS, JavaScript, и фреймворки Vue, Nuxt. Имею
            опыт работы с Backend технологиями Node и Express. Я также знаком с различными
            инструментами разработки, такими как Git, Webpack, Vite, Gulp и другими. Мои
            навыки помогают мне успешно выполнять свои обязанности, в том числе в сложных
            задачах, и я постоянно профессионально развиваюсь. Я готов к новым проектам и
            постоянному развитию своих навыков. Буду рад помочь вашей компании в создании
            качественных и современных веб-сайтов и приложений.<br /><br />
            Навыки, которыми я владею:
          </p>
          <ul class="about-me__right-list">
            <li>
              Отличные знания HTML, CSS, JavaScript, предпроцессора SASS/SCSS, фреймворков
              Vue и Nuxt;
            </li>
            <li>
              Создание кроссбраузерной, адаптивной и/или резиновой верстки с валидным
              кодом, а также CSS animations и transitions;
            </li>
            <li>
              Глубокое понимание асинхронности на JavaScript и его применение в Backend и
              Frontend. Качественный и грамматный асинхронный код для
              отправления/обработки запросов по REST API;
            </li>
            <li>
              Хорошие знания среды исполнения Node и Backend-фреймворка Express. Также
              элементарные знания баз данных и Postgres SQL;
            </li>
            <li>Базовые знания TypeScript;</li>
            <li>
              Работаю с терминалом и системой контроля версиями Git в каждом своём проекте.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedImg from "../Other/AnimatedImg.vue";
</script>

<style scoped lang="scss">
.about-me {
  width: 100%;
  background: $white-color;
  padding-bottom: 0;
  overflow: hidden;
  &__title {
    color: $black-color;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 450rem 1fr;
    column-gap: 100rem;
    align-items: flex-end;
    @media only screen and (max-width: 650px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 0;
    }
    img {
      width: 100%;
      object-fit: contain;
      align-self: flex-end;
    }
  }
  &__right {
    padding-bottom: 20rem;
    &-text {
      margin-bottom: 20rem;
    }
    &-list {
      padding-left: 20rem;
      li {
        margin-bottom: 8rem;
      }
    }
  }
}
</style>
