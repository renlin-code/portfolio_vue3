<template>
  <section id="proyects" class="proyects renlincode-section">
    <div class="proyects__content main-content-wrapper">
      <h2 class="proyects__title renlincode-title section-title">
        Некоторые проекты с моим участием
      </h2>
      <div class="proyects__wrapper">
        <div class="proyects__proyect" v-for="proyect in proyects">
          <h6 class="proyects__proyect-info-title renlincode-subtitle desktop-hidden">
            {{ proyect.title }}
          </h6>
          <div class="proyects__proyect-left">
            <a
              :href="proyect.deploy_address"
              target="_blank"
              class="proyects__proyect-img-link"
            >
              <figure class="onhover-light">
                <img :src="proyect.img_url" alt="" />
                <div class="front-layer"></div>
              </figure>
            </a>
          </div>
          <div class="proyects__proyect-info">
            <h6 class="proyects__proyect-info-title renlincode-subtitle mobile-hidden">
              {{ proyect.title }}
            </h6>
            <p class="proyects__proyect-info-list-title">Что делал я по проекту:</p>
            <ul class="proyects__proyect-info-list">
              <li v-for="detail in proyect.details">{{ detail }}</li>
            </ul>
            <div class="proyects__proyect-info-tech">
              <p class="proyects__proyect-info-tech-text">Стек проекта:</p>
              <ul>
                <li v-for="tech in proyect.stack"><skillIcon :type="tech" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import skillIcon from "../Icons/skillIcon.vue";
import { ref, reactive, onMounted } from "vue";

const proyects = reactive([
  {
    id: "0",
    title: "Сайт интернет-провайдера с личным кабинетом",
    details: [
      "Резиновая верстка макетов;",
      "Создание и написание Nuxt компонентов и программирование их функционнальности и анимаций;",
      "Взаимодействие с Backend через API;",
      "Создание прелоудера и его анимаций;",
      "(Еще в разработке)",
    ],
    deploy_address: "",
    img_url: "/src/assets/images/proyects/m2.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    id: "1",
    title: "Сайт логистической компании с личным кабинетом",
    details: [
      "Резиновая верстка макетов;",
      "Создание и написание Nuxt компонентов и программирование их функционнальности и анимаций;",
      "Взаимодействие с Backend через API;",
      "Создание прелоудера и его анимаций;",
      "(Еще в разработке)",
    ],
    deploy_address: "https://logist.choosedesign.ru/",
    img_url: "/src/assets/images/proyects/logist.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    id: "2",
    title: "Сайт агентства недвижимости с каталогом объектов",
    details: [
      "Резиновая верстка макетов новых страниц;",
      "Создание и написание Nuxt компонентов и программирование их функционнальности и анимаций для новых страниц;",
      "Взаимодействие с Backend через API;",
      "Правки по сайту.",
    ],
    deploy_address: "https://akit.ru/",
    img_url: "/src/assets/images/proyects/mir-kv.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress", "Prisma ORM"],
  },
  {
    id: "3",
    title: "Корпоративный сайт компании SKYTECHNIC",
    details: [
      "Резиновая верстка макетов;",
      "Создание и написание Nuxt компонентов и программирование их функционнальности и анимаций;",
      "Взаимодействие с Backend через API;",
      "Создание прелоудера и его анимаций.",
    ],
    deploy_address: "https://skytechnic.aero/",
    img_url: "/src/assets/images/proyects/skytechnic.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    id: "4",
    title: "Корпоративный сайт с аналитикой рынка E-commerce России",
    details: [
      "Резиновая верстка макетов новых страниц;",
      "Создание и написание Nuxt компонентов и программирование их функционнальности и анимаций для новых страниц;",
      "Взаимодействие с Backend через API;",
      "Правки по сайту.",
    ],
    deploy_address: "https://akit.ru/",
    img_url: "/src/assets/images/proyects/akit.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    id: "5",
    title: "Интернет-магазин светильников и люстр оптом",
    details: ["Резиновая верстка макетов новых страниц;", "(Еще в разработке)"],
    deploy_address: "https://test.choosedesign.ru/nasledie/index.html",
    img_url: "/src/assets/images/proyects/sonex.jpg",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "1C Bitrix"],
  },
  {
    id: "6",
    title: "Nasledie – портал для создания “Капсулы жизни”",
    details: ["Резиновая верстка макетов новых страниц;", "(Еще в разработке)"],
    deploy_address: "https://test.choosedesign.ru/nasledie/index.html",
    img_url: "/src/assets/images/proyects/nasledie.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    id: "7",
    title: "Cайт на Тильде с интеграцией с другими сервисами",
    details: [
      "Кастомизация некоторых блоков с помощью CSS;",
      "Интеграция с Unisender и Bitrix24;",
      "Написание дополнительного Javascript кода.",
    ],
    deploy_address: "https://omnicdek.ru/",
    img_url: "/src/assets/images/proyects/omnicdek.png",
    stack: ["HTML", "CSS", "JavaScript", "Tilda"],
  },
]);

const clientWidth = ref(null);
const flkty = ref(null);

const startFlickity = () => {
  let options = {
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    wrapAround: true,
    prevNextButtons: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  if (clientWidth.value > 650) {
    flkty.value = new Flickity(".proyects__wrapper", options);
  }
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  startFlickity();
});
</script>

<style lang="scss">
.proyects {
  width: 100%;
  background: $black-color;
  overflow: hidden;
  &__title {
    color: $white-color;
  }
  &__proyect {
    width: 1100rem;
    display: grid;
    grid-template-columns: 443rem 1fr;
    gap: 82rem;
    justify-content: space-between;
    min-height: 248rem;
    margin-right: 30rem;
    @media only screen and (max-width: 650px) {
      width: 100%;
      display: flex;
      min-height: unset;
      flex-direction: column;
      gap: 0;
      margin-right: 0;
      margin-bottom: 60rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &-img-link {
      @media only screen and (max-width: 650px) {
        display: block;
        margin-bottom: 20rem;
      }
      figure {
        width: 100%;
        height: 248rem;
        border-radius: 10rem;
        box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
        @media only screen and (max-width: 650px) {
          height: 170rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    &-info {
      width: 100%;
      padding-right: 90rem;
      @media only screen and (max-width: 650px) {
        padding-right: unset;
      }
      &-title {
        color: $white-color;
        font-family: "Open Sans", sans-serif;
        margin-bottom: 30rem;
        @media only screen and (max-width: 650px) {
          margin-bottom: 20rem;
        }
      }
      &-list {
        padding-left: 20rem;
        margin-bottom: 20rem;
        &-title {
          color: $white-color;
          margin-bottom: 10rem;
          font-weight: 600;
        }
        li {
          color: $white-color;
          margin-bottom: 8rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      &-tech {
        margin-bottom: 20rem;
        @media only screen and (max-width: 650px) {
          margin-bottom: 0;
        }
        &-text {
          color: $white-color;
          margin-bottom: 10rem;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 10rem;
          list-style: none;
        }
      }
    }
  }
  .flickity {
    &-viewport {
      overflow: visible;
      cursor: default !important;
    }
    &-page-dots {
      bottom: -46rem;
      .dot {
        width: 10rem;
        height: 10rem;
        border-radius: 10rem;
        background: $white-color;
        transition: all 300ms ease-in-out;
        &.is-selected {
          background: $main-color;
          width: 30rem;
        }
      }
    }
  }
}
</style>
