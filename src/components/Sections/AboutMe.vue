<template>
  <section id="about" class="about-me renlincode-section">
    <div class="about-me__content main-content-wrapper">
      <h2 class="about-me__title renlincode-title section-title">Обо мне</h2>
      <div class="about-me__wrapper">
        <AnimatedImg />
        <!-- <img src="@/assets/images/about-me-img.png" alt="Рене Линарес" /> -->
        <div class="about-me__right">
          <p class="about-me__right-text">
            Я - Frontend разработчик с Кубы. Уже несколько лет живу в России, поэтому
            очень хорошо говорю по-русски. Я люблю решать задачи путем написания кода и
            наслаждаюсь результатом его выполнения. Мне нравится учиться и приобретать
            новые навыки, поэтому я всегда развиваюсь и стараюсь узнать, как можно
            больше.<br /><br />
            Навыки которыми я владею:
          </p>
          <ul class="about-me__right-list">
            <li>Отличные знания HTML5, CSS3, JavaScript, предпроцессора SASS/SCSS, фреймворков Vue.js/Nuxt и Node/Express.js</li>
            <li>
              Кросс-браузерная, адаптивная и/или резиновая верстка с валидным кодом и
              также CSS animations и transitions.
            </li>
            <li>
              Глубокое понимание осинхронности на JavaScript и его приминенние в Backend и Frontend. Качественный и грамматный асинхронный код для отправления/обработки запросов по REST API
            </li>
            <li>
              Работа с терминалом и системой контроля версиями Git в каждом
              своём проекте.
            </li>
            <li>Базовые знания TypeScript, Sequelize ORM и Postgres SQL</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedImg from '../Other/AnimatedImg.vue';


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
    @media only screen and (max-width: 650px) {
      display: flex;
      flex-direction: column-reverse;
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
