<template>
  <section class="container">
    <div class="row mt-2">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 class="display-3">Codotype</h1>
          </div>
        </div>

        <div class="row py-2">
          <div class="col-lg-12 text-center">
            <!-- <p class="lead">visual code scaffolding for the modern web</p> -->
            <p class="lead">
              Hand-crafted code scaffolding for the modern web
            </p>
            <p>
              Prototype new web applications amazingly fast
            </p>
            <!-- <p>
              Define your models, attributes, and relations - Codotype does the
              rest
            </p> -->
          </div>

          <div
            class="col-lg-12 text-center d-flex align-items-center justify-content-center"
          >
            <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-lg-6">
            <hr />
          </div>
          <div class="col-lg-12 text-center text-muted">
            <p class="lead">
              <!-- <font-awesome-icon icon="drafting-compass" /> -->
              Select a generator to get started
            </p>
          </div>
          <div class="col-lg-12">
            <div class="card-columns">
              <GeneratorCard :model="g1" />
              <GeneratorCard :model="g3" />
              <GeneratorCard :model="g2" />
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

        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <hr />
          </div>
        </div>

        <div class="row mt-2 mb-4">
          <div
            v-for="section in infoSections"
            :key="section.title"
            class="col-lg-4 text-center"
          >
            <h4>{{ section.title }}</h4>
            <p>{{ section.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */

import GeneratorCard from '@codotype/ui/src/modules/generator/components/GeneratorCard.vue'
import generatorCollection from '~/assets/content/generators.json'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  async asyncData({ env }) {
    try {
      const infoSections = await client.getEntries({
        content_type: 'infoSection',
        order: 'fields.order'
      })

      return {
        infoSections: infoSections.items.map(i => i.fields)
      }
    } catch (e) {
      console.error(e)
    }
  },
  components: {
    GeneratorCard
  },
  data() {
    return {
      g1: generatorCollection[0],
      g2: generatorCollection[1],
      g3: generatorCollection[2]
    }
  },
  head() {
    return {
      title: 'Codotype - Home',
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
