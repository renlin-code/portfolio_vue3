<template>
  <section id="about" class="about-me renlincode-section">
    <div class="about-me__content main-content-wrapper">
      <h2 class="about-me__title renlincode-title section-title">Обо мне</h2>
      <div class="about-me__wrapper">
        <img src="@/assets/images/about-me-img.png" alt="Рене Линарес" />
        <div class="about-me__right">
          <p class="about-me__right-text">
            Я - кубинский Frontend разработчик. Уже несколько лет живу в России,
            поэтому очень хорошо говорю по-русский. Я люблю решать задачи путем
            написания кода и наслаждаюсь результатом его выполнения. Мне
            нравится учиться и приобретать новые навыки, поэтому я всегда
            развиваюсь и стараюсь узнать, как можно больше.
          </p>
          <ul class="about-me__right-list">
            <li>
              Очень хорошо владею HTML5, CSS3, JavaScript и фреймворки
              Vue.js/Nuxt. Благодаря этим знаниям я хорошо разбираюсь в процессе
              разработки Landing Pages, Web Apps и в том числе SPA.
            </li>
            <li>
              Обладаю навыками кросс-браузерной, адаптивной и резиновой верстки,
              CSS анимации и всегда использую семантический HTML. Также умею
              пользоваться предпроцессором SASS/SCSS
            </li>
            <li>
              Имею опыт в разработке веб-приложений используя асинхронный код и
              REST API для взаимодействия с Backend. Хорошо умею пользоваться
              Axios
            </li>
            <li>
              Хорошо понимаю ООП на JavaScript и принцип построения архитектуры
              проекта с помощью Vue компонентов
            </li>
            <li>
              Работаю с терминалом и использую систему контроля версиями Git в
              каждом своём проекте.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-me {
  width: 100%;
  background: $white-color;
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
