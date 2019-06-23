<template>
  <div class="row">
    <div class="col-lg-12">
      <AboutJumbotron />
      <AboutBody />
      <AboutAttribution svg />
    </div>
  </div>
</template>

<script>
import AboutJumbotron from '@codotype/ui/src/components/About/AboutJumbotron.vue'
import AboutBody from '@codotype/ui/src/components/About/AboutBody.vue'
import AboutAttribution from '@codotype/ui/src/components/About/AboutAttribution.vue'
import { getPageMeta } from '~/assets/meta.js'

export default {
  components: {
    AboutJumbotron,
    AboutBody,
    AboutAttribution
  },
  head() {
    return {
      title: 'Codotype - About',
      meta: getPageMeta({ url: 'https://codotype.io/about' })
    }
  }
}
</script>
