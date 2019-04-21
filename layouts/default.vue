<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
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
