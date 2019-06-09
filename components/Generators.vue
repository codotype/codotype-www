<template>
  <div id="generators" class="section bg-light">
    <div class="container">
      <div class="section-title text-center">
        <h3>
          Jump In
        </h3>
        <p>Select a generator below to customize your starter code</p>
      </div>
      <div class="row my-2">
        <div class="col-lg-12">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-12">
              <div class="card-columns">
                <GeneratorCard :model="g1" />
                <GeneratorCard :model="g2" />
                <GeneratorCard :model="g3" />
              </div>
            </div>
          </div>

          <div class="row mt-2 mb-4 justify-content-center">
            <div class="col-lg-4">
              <b-button
                to="/generators"
                size="lg"
                variant="outline-primary"
                block
              >
                Browse Generators
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import GeneratorCard from '@codotype/ui/src/modules/generator/components/GeneratorCard.vue'
import generatorCollection from '~/assets/content/generators.json'

export default {
  components: {
    GeneratorCard
  },
  data() {
    return {
      g1: generatorCollection[0],
      g2: generatorCollection[1],
      g3: generatorCollection[2],
    }
  }
}
</script>
