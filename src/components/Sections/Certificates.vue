<template>
  <section id="certificates" class="certificates renlincode-section">
    <Transition name="fade">
      <Modal v-if="showModal" @close="showModal = false">
        <ModalCertificates :selectedInyected="selected" />
      </Modal>
    </Transition>

    <div class="certificates__content main-content-wrapper">
      <h2 class="certificates__title renlincode-title section-title">{{ $t('certificates_section.title') }}</h2>
      <div class="certificates__wrapper">
        <p class="certificates__text">
          {{ $t('certificates_section.text') }}
          <a
            target="_blank"
            class="renlincode-link opacity"
            href="https://platzi.com"
            rel="noopener noreferrer"
            >Platzi</a
          >.
        </p>
        <div class="certificates__slider">
          <div class="certificates__slider-wrapper">
            <figure
              class="certificates__slider-slide onhover-light"
              v-for="(certificate, index) in certificates"
              @click="openCertificate(index)"
            >
              <div class="front-layer"></div>
              <img :src="certificate.url" alt="" />
            </figure>
          </div>
          <div class="certificates__slider-shadow shadow-left mobile-hidden"></div>
          <div class="certificates__slider-shadow shadow-right mobile-hidden"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Modal from "@/components/Layout/Modal.vue";
import ModalCertificates from "@/components/Modals/ModalCertificates.vue";
import { ref, reactive, onMounted } from "vue";
const certificates = reactive([
  {
    id: "0",
    name: "Curso de Frontend",
    url: "https://imgur.com/lPnFzWv.png",
    url_mini: "https://imgur.com/nu9fObo.png",
  },
  {
    id: "1",
    name: "Curso Práctico de Frontend",
    url: "https://imgur.com/QwLoaH5.png",
    url_mini: "https://imgur.com/zH3WhTM.png",
  },
  {
    id: "2",
    name: "Curso de HTML y CSS",
    url: "https://imgur.com/wHz3Oa6.png",
    url_mini: "https://imgur.com/8IgAiHa.png",
  },
  {
    id: "3",
    name: "Curso Práctico de HTML y CSS",
    url: "https://imgur.com/LqLRFCy.png",
    url_mini: "https://imgur.com/BlZhO9V.png",
  },
  {
    id: "4",
    name: "Curso de Responsive Design",
    url: "https://imgur.com/W8ZWjm1.png",
    url_mini: "https://imgur.com/1JLPaqK.png",
  },
  {
    id: "5",
    name: "Curso de la Terminal",
    url: "https://imgur.com/hcVJ1jo.png",
    url_mini: "https://imgur.com/3uDr96l.png",
  },
  {
    id: "6",
    name: "Curso de Git y GitHub",
    url: "https://imgur.com/UiwBBwR.png",
    url_mini: "https://imgur.com/WrgAMhV.png",
  },
  {
    id: "7",
    name: "Curso Básico de JavaScript",
    url: "https://imgur.com/UHzlGAX.png",
    url_mini: "https://imgur.com/1rojaBV.png",
  },
  {
    id: "8",
    name: "Curso Básico Práctico de JavaScript",
    url: "https://imgur.com/NNFKnCT.png",
    url_mini: "https://imgur.com/ZArpOF6.png",
  },
  {
    id: "9",
    name: "Curso de Closures y Scope",
    url: "https://imgur.com/vespUZi.png",
    url_mini: "https://imgur.com/jzHr9tn.png",
  },
  {
    id: "10",
    name: "Curso de Ingeniería de Softwares",
    url: "https://imgur.com/LqXd7rt.png",
    url_mini: "https://imgur.com/2cr7elT.png",
  },
  {
    id: "11",
    name: "Curso Básico de JS Orientado a Objetos",
    url: "https://imgur.com/aOWvcBv.png",
    url_mini: "https://imgur.com/Pmc1N5B.png",
  },
  {
    id: "12",
    name: "Curso Intermedio de JS Orientado a Objetos",
    url: "https://imgur.com/QWtmWJ4.png",
    url_mini: "https://imgur.com/axTQSlK.png",
  },
  {
    id: "13",
    name: "Curso de Manipulación de Arrays",
    url: "https://imgur.com/Zlr8QHf.png",
    url_mini: "https://imgur.com/H8Vqclw.png",
  },
  {
    id: "14",
    name: "Curso de Asincronismo en JavaScript",
    url: "https://imgur.com/pKlbh37.png",
    url_mini: "https://imgur.com/ASfPE57.png",
  },
  {
    id: "15",
    name: "Curso de Diseño Web con Flexbox y CSS Grid",
    url: "https://imgur.com/XaqS4sY.png",
    url_mini: "https://imgur.com/9cuPbZO.png",
  },
  {
    id: "16",
    name: "Curso de Transformaciones y Transiciones",
    url: "https://imgur.com/5O43Uv3.png",
    url_mini: "https://imgur.com/Tf6FGqD.png",
  },
  {
    id: "17",
    name: "Curso de Ecmascript",
    url: "https://imgur.com/J1h7fbJ.png",
    url_mini: "https://imgur.com/vEXaQT9.png",
  },
  {
    id: "18",
    name: "Curso de consumo de API REST con JavaScript",
    url: "https://imgur.com/Q7xjcoH.png",
    url_mini: "https://imgur.com/IaEjX5r.png",
  },
  {
    id: "19",
    name: "Curso de Fundamentos de TypeScript",
    url: "https://imgur.com/KMpeNwD.png",
    url_mini: "https://imgur.com/RThXdd2.png",
  },
  {
    id: "20",
    name: "Curso de Vue.js: Introducción y fundamentos",
    url: "https://imgur.com/QX6noWs.png",
    url_mini: "https://imgur.com/4z9NM9C.png",
  },
]);

const clientWidth = ref(null);
const flkty = ref(null);

const startFlickity = () => {
  let options = {
    autoPlay: true,
    pageDots: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  if (clientWidth.value > 650) {
    options.draggable = false;
  } else {
    options.draggable = true;
  }

  flkty.value = new Flickity(".certificates__slider-wrapper", options);
};

const selected = ref(null);
const showModal = ref(false);

const openCertificate = (index) => {
  selected.value = index;
  showModal.value = true;
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  startFlickity();
});
</script>

<style lang="scss">
.certificates {
  width: 100%;
  background: $black-color;
  &__content {
    @media only screen and (max-width: 650px) {
      padding: 0 !important;
    }
  }
  &__title {
    color: $white-color;
    @media only screen and (max-width: 650px) {
      padding: 0 15rem;
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 450rem 1fr;
    gap: 100rem;
    justify-content: space-between;
    align-items: flex-start;
    @media only screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
      gap: 10rem;
    }
  }
  &__text {
    color: $white-color;
    padding-top: 40rem;
    @media only screen and (max-width: 650px) {
      padding: 0 15rem;
    }
  }
  &__slider {
    position: relative;
    width: 100%;
    height: 313rem;
    overflow: hidden;
    padding: 40rem 0;
    @media only screen and (max-width: 650px) {
      height: 327rem;
    }
    &-wrapper {
      width: 100%;
      height: 100%;
    }
    &-slide {
      width: 300rem;
      height: 232rem;
      margin: 0 200rem;
      border-radius: 10rem;
      overflow: hidden;
      box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
      cursor: url("/src/assets/icons/loupe.cur"), auto;
      @media only screen and (max-width: 650px) {
        width: 260rem;
        height: 200rem;
        margin: 0 50rem;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &-shadow {
      width: 140rem;
      height: 100%;
      position: absolute;
      top: 0;
      &.shadow-left {
        left: 0;
        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: -webkit-linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#151f28",GradientType=1);
      }
      &.shadow-right {
        right: 0;
        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: -webkit-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#151f28",GradientType=1);
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
          bottom: -20rem;
          top: unset;
        }
        &.previous {
          @media only screen and (max-width: 650px) {
            left: 110rem;
          }
        }
        &.next {
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
