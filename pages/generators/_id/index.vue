<template>
  <section class="container mt-4">
    <GeneratorStart v-if="model" :model="model" :externalLink="externalLink" />
  </section>
</template>

<script>
import GeneratorStart from '@codotype/ui/src/modules/generator/components/GeneratorStart.vue'
import generatorCollection from '~/assets/content/generators.json'

export default {
  components: {
    GeneratorStart
  },
  head() {
    return {
      title: 'Codotype - ' + this.model.label,
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
          content: this.model.description
        },
        {
          property: 'og:url',
          content: 'https://codotype.io/generators/' + this.model.id
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Codotype - ' + this.model.label
        },
        {
          property: 'og:description',
          content: this.model.description
        },
        {
          property: 'og:image',
          content: 'https://avatars2.githubusercontent.com/u/42126198?s=200&v=4'
        }
      ]
    }
  },
  computed: {
    model() {
      return generatorCollection.find(g => g.id === this.$route.params.id)
    },
    externalLink() {
      const id = this.$route.params.id
      return process.env.CODOTYPE_APP_HOST + `/generators/${id}/build`
    }
  }
}
</script>
