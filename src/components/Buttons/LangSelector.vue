<template>
  <button class="lang-selector"
    :class="{'lang-selector--open' : open}"
    @click="open = !open"
    @blur="open = false"
  >
    <div class="lang-selector__curr-option opacity">
      <span>{{ langs[selectedIndex]?.text }}</span>
      <Arrow class="lang-selector__curr-option-arrow" />
    </div>
    <div class="lang-selector__options">
      <ul>
        <li class="opacity"
          v-for="lang in noneSelectedLangs"
          @click="selectLang(lang)"
        >
          {{ lang.text }}
        </li>
      </ul>
    </div>
  </button>
</template>

<script setup>
import Arrow from '../Icons/arrow.vue';
import { ref, reactive, computed, onMounted } from 'vue';
import i18n from '../../locales/i18n';

const open = ref(false);
const selectedIndex = ref(null);
const langs = reactive([
  {
    text: 'eng',
    locale: 'en'
  },
  {
    text: 'esp',
    locale: 'es'
  },
  {
    text: 'rus',
    locale: 'ru'
  },
])
const noneSelectedLangs = computed(() => {
  const langsCopy = [ ...langs ];
  langsCopy.splice(selectedIndex.value, 1);
  return langsCopy;
})

const selectLang = (lang) => {
  selectedIndex.value = langs.indexOf(lang);
  const { origin } = window.location;
  const { locale } = langs[selectedIndex.value];
  if (locale === 'es' || locale === 'ru') {
    window.location.replace(`${origin}/${locale}`)
  } else {
    window.location.replace(`${origin}`)
  }
}
const asignLang = () => {
  const { pathname } = window.location;
  const localeFromPathname = pathname.slice(1, 3);
  const locale = localeFromPathname ? localeFromPathname : 'en'
  i18n.global.locale = locale;
  selectedIndex.value = langs.map(i => i.locale).indexOf(locale);
}
onMounted(() => {
  asignLang();
})
</script>

<style scoped lang="scss">
.lang-selector {
  position: relative;
  padding: 0;
  font-size: 14rem;
  padding: 6rem;
  border-radius: 10rem 10rem 0 0;
  transition: all 300ms ease-in-out;
  &--open {
    background: #0d1519;
    .lang-selector {
      &__curr-option {
        &-arrow {
          transform: rotate(180deg);
        }
      }
      &__options {
        max-height: 100rem;
        padding-bottom: 6rem;
        background: #0d1519;
      }
    }
  }
  &__curr-option {
    display: flex;
    align-items: center;
    gap: 6rem;
    span {
      color: $white-color;
      text-transform: uppercase;
    }
    &-arrow {
      transition: all 300ms ease-in-out;
    }
  }
  &__options {
    position: absolute;
    left: 0;
    overflow: hidden;
    max-height: 0;
    width: 100%;
    padding-top: 6rem;
    border-radius: 0 0 10rem 10rem;
    transition: all 300ms ease-in-out;
    ul {
      display: flex;
      flex-direction: column;
      gap: 6rem;
      li {
        padding: 0 6rem;
        text-align: left;
        color: $white-color;
        text-transform: uppercase;
      }
    }
  }
}
</style>
