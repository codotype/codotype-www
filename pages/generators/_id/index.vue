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
          hid: 'description',
          name: 'description',
          content: this.model.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res.cloudinary.com/codotype/image/upload/v1552257221/codotype-icons/favicon.png'
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
