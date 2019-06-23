<template>
  <div class="overflow-hidden">
    <header id="home">
      <Navbar />
    </header>
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import AppFooter from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    AppFooter
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: 'http://www.codotype.io/',
      name: 'Codotype',
      author: {
        '@type': 'Person',
        name: 'Alexander Schwartzberg'
      },
      description: 'Configurable starter code for the modern web',
      publisher: 'Codotype.io'
    }
  },
  head() {
    return {
      title: 'Codotype - Loading...',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/main.sass';

body
  overflow-x: hidden

[class^='display']
  font-family: $heading-font
  font-weight: 700

@include media-breakpoint-down(md)
  .display-3
    font-size: 4rem

  .display-5
    font-size: 1.4rem

@include media-breakpoint-down(sm)
  .display-3
    font-size: 2.2rem

  .display-4
    font-size: 2.5rem

header
  position: relative
  z-index: 2

.bg-shape
  position: absolute
  background-color: $blue
  background-image: linear-gradient(100deg, $blue, $teal)
  top: -350px
  right: -110px
  border-radius: 8%
  width: 50%
  height: 800px
  transform: skew(3deg, 30deg)
  opacity: 1
  // z-index: -1
  @include media-breakpoint-down(md)
    top: -150px
    right: 0
    width: 20%
    height: 500px
  @include media-breakpoint-down(sm)
    display: none

.bg-circle
  position: absolute
  background-color: $blue
  background-image: linear-gradient(100deg, $blue, $teal)
  top: -400px
  left: -350px
  border-radius: 100%
  height: 800px
  width: 800px
  opacity: 0.2
  // z-index: -1
  @include media-breakpoint-down(md)
    height: 400px
    width: 400px
    top: -200px
    left: -200px
  @include media-breakpoint-down(sm)
    display: none

.bg-circle-two
  position: absolute
  background-color: $blue
  background-image: linear-gradient(100deg, $blue, $teal)
  top: 150px
  left: 350px
  border-radius: 100%
  height: 100px
  width: 100px
  opacity: 0.8
  // z-index: -1
  @include media-breakpoint-down(md)
    top: 150px
    left: 70px
    height: 50px
    width: 50px
  @include media-breakpoint-down(sm)
    display: none

.section
  position: relative
</style>
