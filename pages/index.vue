<template>
  <div class="bg-white">
    <template>
      <div class="bg-shape"></div>
      <div class="bg-circle"></div>
      <div class="bg-circle-two"></div>
    </template>
    <Jumbotron :title="title" :subtitle="subtitle" :body="jumbotronText" />
    <InfoSection :info-sections="infoSections" />
    <Feature :features="features" />
    <!-- <RegisterForm /> -->
    <!-- <Generators /> -->
    <!-- <Testimonials /> -->
    <!-- <Pricing /> -->
  </div>
</template>

<script>
/* eslint-disable */

// import Generators from '~/components/Generators.vue'
// import Pricing from '~/components/Pricing.vue'
// import Testimonials from '~/components/Testimonials.vue'
// import Mockup from '~/components/Mockup.vue'
import Jumbotron from '~/components/Jumbotron.vue'
import RegisterForm from '~/components/RegisterForm.vue'
import InfoSection from '~/components/InfoSections.vue'
import Feature from '~/components/Feature.vue'
import { createClient } from '~/plugins/contentful.js'
import { getPageMeta } from '~/assets/meta.js'

const client = createClient()

export default {
  async asyncData({ env }) {
    try {
      const response = await client.getEntries({
        content_type: 'landingPage'
      })

      const landingPage = response.items[0].fields
      // console.log(landingPage.features.map(f => f.fields))

      return {
        title: landingPage.title,
        subtitle: landingPage.subtitle,
        jumbotronText: landingPage.jumbotronText,
        infoSections: landingPage.infoSections.map(i => i.fields),
        features: landingPage.features.map(i => i.fields)
      }
    } catch (e) {
      console.error(e)
    }
  },
  components: {
    Jumbotron,
    Feature,
    InfoSection,
    // Generators,
    // Pricing,
    // Testimonials,
    // RegisterForm,
    // Mockup
  },
  head() {
    return {
      title: 'Codotype - Home',
      meta: getPageMeta({})
    }
  }
}
</script>
