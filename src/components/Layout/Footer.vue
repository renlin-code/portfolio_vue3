<template>
  <footer class="footer">
    <div class="main-content-wrapper">
      <div class="footer__content">
        <div class="footer__logo">
          <RenlinCodeLogo />
        </div>
        <div class="footer__wrapper">
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li v-for="(link, index) in $tm('nav_links')">
                <a class="underline" :href="links[index]">{{ link }}</a>
              </li>
            </ul>
          </nav>
          <div class="footer__right">
            <a class="footer__phone opacity" href="tel:+79373217299">
              <contactIcon type="phone" class="footer__phone-icon" />
              <span class="renlincode-text">+7 (937) 321 72 99</span>
            </a>
            <span class="footer__link">
              {{ $t('footer.link_text') }}
              <a
                class="renlincode-link opacity"
                href="http://github.com/renlin-code/"
                target="_blank"
                rel="noopener noreferrer"
                >renlin-code</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import RenlinCodeLogo from "../Logos/renlinCodeLogo.vue";
import contactIcon from "../Icons/contactIcon.vue";
import { reactive } from "vue";

const links = reactive([
  "#about", "#certificates", "#works", "#projects", "#contacts"
]);
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 40rem 0;
  background: $very-black-color;
  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 60rem;
    @media only screen and (max-width: 650px) {
      margin-bottom: 50rem;
    }
    svg {
      width: 177rem;
      height: 23rem;
      @media only screen and (max-width: 650px) {
        width: 150rem;
        height: 20rem;
      }
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 650px) {
      flex-direction: column;
    }
  }
  &__nav {
    &-list {
      list-style: none;
      display: flex;
      gap: 30rem;
      @media only screen and (max-width: 650px) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 10rem;
        row-gap: 16rem;
        margin-bottom: 30rem;
      }
      a {
        color: $white-color;
      }
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    gap: 30rem;
    @media only screen and (max-width: 650px) {
      align-items: center;
      gap: 16rem;
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
  &__link {
    color: $white-color;
  }
}
</style>
