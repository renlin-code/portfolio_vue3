<template>
  <div class="modal-certificates">
    <div class="modal-certificates__counter">
      {{ selected + 1 }} / {{ certificates.length }}
    </div>
    <div class="modal-certificates__slider">
      <figure
        class="modal-certificates__slider-slide"
        v-for="certificate in certificates"
      >
        <img :src="certificate.url" alt="" />
      </figure>
    </div>
    <p class="modal-certificates__description">
      {{ certificates[selected].description }}
    </p>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
const certificates = reactive([
  {
    id: "0",
    name: "Curso de Frontend",
    description: "Теоритический курс по Frontend-разработке",
    url: "/assets/images/certificate-frontend.png",
    url_mini: "/assets/images/certificate-frontend-mini.png",
  },
  {
    id: "1",
    name: "Curso Práctico de Frontend",
    description: "Практический курс по Frontend-разработке",
    url: "/assets/images/certificate-frontend-practic.png",
    url_mini:
      "/assets/images/certificate-frontend-practic-mini.png",
  },
  {
    id: "2",
    name: "Curso de HTML y CSS",
    description: "Полный теоритический курс по HTML и CSS",
    url: "/assets/images/certificate-html-and-css.png",
    url_mini:
      "/assets/images/certificate-html-and-css-mini.png",
  },
  {
    id: "3",
    name: "Curso Práctico de HTML y CSS",
    description: "Полный практический курс по HTML и CSS",
    url: "/assets/images/certificate-html-and-css-practic.png",
    url_mini:
      "/assets/images/certificate-html-and-css-practic-mini.png",
  },
  {
    id: "4",
    name: "Curso de Responsive Design",
    description: "Курс по адаптивной верстке Mobile First",
    url: "/assets/images/certificate-responsive-mobile-first.png",
    url_mini:
      "/assets/images/certificate-responsive-mobile-first-mini.png",
  },
  {
    id: "5",
    name: "Curso de la Terminal",
    description: "Курс по терминалу",
    url: "/assets/images/certificate-terminal.png",
    url_mini: "/assets/images/certificate-terminal-mini.png",
  },
  {
    id: "6",
    name: "Curso de Git y GitHub",
    description: "Курс по Git и GitHub",
    url: "/assets/images/certificate-git-github.png",
    url_mini: "/assets/images/certificate-git-github-mini.png",
  },
  {
    id: "7",
    name: "Curso Básico de JavaScript",
    description: "Базовый теоритический курс по JavaScript",
    url: "/assets/images/certificate-basic-js.png",
    url_mini: "/assets/images/certificate-basic-js-mini.png",
  },
  {
    id: "8",
    name: "Curso Básico Práctico de JavaScript",
    description: "Базовый практический курс по JavaScript",
    url: "/assets/images/certificate-basic-js-practic.png",
    url_mini:
      "/assets/images/certificate-basic-js-practic-mini.png",
  },
  {
    id: "9",
    name: "Curso de Closures y Scope",
    description: "Курс по Closures y Scope",
    url: "/assets/images/certificate-scope.png",
    url_mini: "/assets/images/certificate-scope-mini.png",
  },
  {
    id: "10",
    name: "Curso de Ingeniería de Softwares",
    description: "Курс по Software Engineering",
    url: "/assets/images/certificate-software-engineering.png",
    url_mini:
      "/assets/images/certificate-software-engineering-mini.png",
  },
  {
    id: "11",
    name: "Curso Básico de JS Orientado a Objetos",
    description: "Базовый теоритический курс по ООП с JavaScript",
    url: "/assets/images/certificate-basic-js-OOP.png",
    url_mini:
      "/assets/images/certificate-basic-js-OOP-mini.png",
  },
  {
    id: "12",
    name: "Curso Intermedio de JS Orientado a Objetos",
    description: "Средний теоритический курс по ООП с JavaScript",
    url: "/assets/images/certificate-middle-js-OOP.png",
    url_mini:
      "/assets/images/certificate-middle-js-OOP-mini.png",
  },
  {
    id: "13",
    name: "Curso de Manipulación de Arrays",
    description: "Курс по управлению Arrays",
    url: "/assets/images/certificate-arrays.png",
    url_mini: "/assets/images/certificate-arrays-mini.png",
  },
  {
    id: "14",
    name: "Curso de Asincronismo en JavaScript",
    description: "Курс по асинхронности в JavaScript",
    url: "/assets/images/certificate-async-js.png",
    url_mini: "/assets/images/certificate-async-js-mini.png",
  },
  {
    id: "15",
    name: "Curso de Diseño Web con Flexbox y CSS Grid",
    description: "Курс по веб-дизайн c Flexbox и CSS Grid",
    url: "/assets/images/certificate-flexbox-css-grid.png",
    url_mini:
      "/assets/images/certificate-flexbox-css-grid-mini.png",
  },
  {
    id: "16",
    name: "Curso de Transformaciones y Transiciones",
    description: "Курс по transform и transition",
    url: "/assets/images/certificate-transform-transition.png",
    url_mini:
      "/assets/images/certificate-transform-transition-mini.png",
  },
  {
    id: "17",
    name: "Curso de Ecmascript",
    description: "Курс по Ecmascript",
    url: "/assets/images/certificate-ecmascript.png",
    url_mini: "/assets/images/certificate-ecmascript-mini.png",
  },
  {
    id: "18",
    name: "Curso de consumo de API REST con JavaScript",
    description: "Курс по REST API с JavaScript",
    url: "/assets/images/certificate-api-rest.png",
    url_mini: "/assets/images/certificate-api-rest-mini.png",
  },
  {
    id: "19",
    name: "Curso de Fundamentos de TypeScript",
    description: "Курс основы TypeScript",
    url: "/assets/images/certificate-typescript.png",
    url_mini: "/assets/images/certificate-typescript-mini.png",
  },
  {
    id: "20",
    name: "Curso de Vue.js: Introducción y fundamentos",
    description: "Курс основы Vue.js",
    url: "/assets/images/certificate-vue.png",
    url_mini: "/assets/images/certificate-vue-mini.png",
  },
]);

const props = defineProps({
  selectedInyected: {
    type: Number,
    default: null,
  },
});

const selected = ref(props.selectedInyected);

const clientWidth = ref(null);
const flkty = ref(null);

const startFlickity = (initialIndex) => {
  let options = {
    initialIndex,
    wrapAround: true,
    pageDots: false,
  };
  if (clientWidth.value > 650) {
    options.draggable = false;
  } else {
    options.draggable = true;
  }

  flkty.value = new Flickity(".modal-certificates__slider", options);
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  startFlickity(selected.value);
  flkty.value.on("select", (index) => {
    selected.value = index;
  });
});
</script>

<style lang="scss">
.modal-certificates {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__counter {
    color: $white-color;
    justify-self: center;
    font-size: 20rem;
    line-height: 26rem;
    font-weight: 600;
    margin-bottom: 30rem;
    @media only screen and (max-width: 650px) {
      font-size: 16rem;
      line-height: 22rem;
    }
  }
  &__slider {
    width: 1300rem;
    height: 436rem;
    @media only screen and (max-width: 650px) {
      width: 100%;
      height: 223rem;
    }
    &-slide {
      width: 560rem;
      height: 100%;
      margin: 0 30%;
      box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
      background: radial-gradient(
        circle,
        $secondary-color 0%,
        $black-color 100%
      );
      @media only screen and (max-width: 650px) {
        width: calc(100% - 30rem);
        margin: 0 10rem;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  &__description {
    color: $white-color;
    width: 1040rem;
    margin: 0 auto;
    text-align: center;
    font-size: 20rem;
    line-height: 26rem;
    font-weight: 600;
    margin-top: 30rem;
    @media only screen and (max-width: 650px) {
      width: calc(100% - 30rem);
      min-height: 100rem;
      font-size: 16rem;
      line-height: 22rem;
    }
  }
  .flickity {
    &-viewport {
      overflow: visible;
      cursor: default !important;
    }
    &-prev-next-button {
      z-index: 1;
      width: 26rem;
      height: 26rem;
      background: transparent;
      color: $main-color;
      transform: none;
      transition: all 300ms ease-in-out;
      &:hover {
        background: $white-color;
        color: $very-black-color;
      }
      @media only screen and (max-width: 650px) {
        bottom: -190rem;
        top: unset;
      }
      &.previous {
        left: 20rem;
        @media only screen and (max-width: 650px) {
          left: 110rem;
        }
      }
      &.next {
        right: 20rem;
        @media only screen and (max-width: 650px) {
          right: 110rem;
        }
      }
    }
    &-button:focus {
      box-shadow: none;
    }
  }
}
</style>
