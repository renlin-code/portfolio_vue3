<template>
  <section id="proyects" class="proyects renlincode-section">
    <div class="proyects__content main-content-wrapper">
      <h2 class="proyects__title renlincode-title section-title">
        {{ $t('projects_for_companies_section.title') }}
      </h2>
      <div class="proyects__wrapper">
        <div class="proyects__proyect" v-for="(proyect, index) in proyectsResult">
          <h6 class="proyects__proyect-info-title renlincode-subtitle desktop-hidden">
            {{ $tm('projects_for_companies_section.projects_list')[index].title }}
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
              {{ $tm('projects_for_companies_section.projects_list')[index].title }}
            </h6>
            <p class="proyects__proyect-info-list-title">{{ $t('projects_for_companies_section.details_text') }}</p>
            <ul class="proyects__proyect-info-list">
              <li v-for="detail in $tm('projects_for_companies_section.projects_list')[index].details">
                {{ detail }}
              </li>
            </ul>
            <div class="proyects__proyect-info-tech">
              <p class="proyects__proyect-info-tech-text">{{ $t('projects_for_companies_section.techs_text') }}</p>
              <ul>
                <li v-for="tech in proyect.stack"><skillIcon :type="tech" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        v-if="proyectsMobShowing < proyects.length"
        class="proyects__load-more renlincode-link opacity desktop-hidden"
        @click="proyectsMobShowing = proyectsMobShowing + 2"
      >
        {{ $t('projects_for_companies_section.load_more_text') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import skillIcon from "../Icons/skillIcon.vue";
import { ref, reactive, computed, nextTick, onMounted } from "vue";

const clientWidth = ref(null);
const proyects = reactive([
  {
    deploy_address: "https://m2.choosedesign.ru",
    img_url: "https://imgur.com/CHVLTpL.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    deploy_address: "https://logist.llc.ru",
    img_url: "https://imgur.com/3njrv8c.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    deploy_address: "https://mirkv.ru",
    img_url: "https://imgur.com/pAAN7d0.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "Node JS", "Express", "Prisma ORM"],
  },
  {
    deploy_address: "https://skytechnic.aero",
    img_url: "https://imgur.com/fw0e2iI.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    deploy_address: "https://akit.ru",
    img_url: "https://imgur.com/k31WsWo.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    deploy_address: "https://nelprow3.fvds.ru",
    img_url: "https://imgur.com/UzVumoZ.jpg",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "1C Bitrix"],
  },
  {
    deploy_address: "https://nasledie.digital",
    img_url: "https://imgur.com/rd0fszb.jpg",
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Vue", "Nuxt", "PHP", "Wordpress"],
  },
  {
    deploy_address: "https://omnicdek.ru/",
    img_url: "https://imgur.com/dbUnquQ.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Tilda"],
  },
]);

const proyectsMobShowing = ref(2);

const proyectsResult = computed(() => {
  if (clientWidth.value > 650) {
    startFlickity();
    return proyects;
  } else {
    return proyects.slice(0, proyectsMobShowing.value);
  }
});

const flkty = ref(null);

const startFlickity = async () => {
  let options = {
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    wrapAround: true,
    prevNextButtons: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  await nextTick();
  flkty.value = new Flickity(".proyects__wrapper", options);
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
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
        font-family: "Open Sans", sans-serif !important;
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
  &__load-more {
    margin-top: 30rem;
    font-size: 16rem;
  }
  .flickity {
    &-viewport {
      overflow: visible;
      cursor: default !important;
    }
    &-page-dots {
      bottom: -76rem;
      .dot {
        width: 8rem;
        height: 8rem;
        border-radius: 8rem;
        margin: 0 8rem;
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
