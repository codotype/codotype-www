<template>
  <div>
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
      meta: [
        {
          property: 'twitter:card',
          content: 'summary'
        },
        {
          property: 'twitter:site',
          value: '@codotype'
        },
        {
          property: 'twitter:creator',
          value: '@aeksco'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Instantly generate full-stack boilerplate code with custom CRUD.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://codotype.io'
        },
        {
          property: 'og:site_name',
          content: 'Codotype'
        },
        {
          property: 'og:title',
          content: 'Codotype - Building Better Boilerplate'
        },
        {
          property: 'og:description',
          content: 'Instantly generate full-stack boilerplate code with custom CRUD.'
        },
        {
          property: 'og:image',
          content: 'https://avatars2.githubusercontent.com/u/42126198?s=200&v=4'
        }
      ]
    }
  }
}
</script>
