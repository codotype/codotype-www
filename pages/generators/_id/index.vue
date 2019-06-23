<template>
  <section class="container mt-4">
    <GeneratorStart
      v-if="model"
      svg
      :model="model"
      :external-link="externalLink"
    />
  </section>
</template>

<script>
import GeneratorStart from '@codotype/ui/src/modules/generator/components/GeneratorStart.vue'
import generatorCollection from '~/assets/content/generators.json'
import { getPageMeta } from '~/assets/meta.js'

export default {
  components: {
    GeneratorStart
  },
  head() {
    return {
      title: 'Codotype - ' + this.model.label,
      meta: getPageMeta({
        url: 'https://codotype.io/generators/' + this.model.id,
        description: this.model.description,
        title: `Codotype - ${this.model.label}`
      })
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
