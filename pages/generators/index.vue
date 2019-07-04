<template>
  <section class="container">
    <div class="row mt-3 mb-5">
      <div class="col-lg-12">
        <h2 class="mb-0">Code Generators</h2>
        <p class="text-muted">
          Instantly generate your next codebase using any of the following
          generators
        </p>
      </div>

      <b-col lg="12">
        <b-row class="mb-2">
          <b-col lg="9">
            <input
              v-model="filter"
              type="text"
              class="form-control form-control-lg mb-2"
              placeholder="Filter Generators"
            />
          </b-col>

          <b-col lg="3" class="pl-0">
            <b-button
              block
              size="lg"
              variant="outline-warning"
              @click="clearFilter()"
            >
              <font-awesome-icon icon="times" />
              Clear Filter
            </b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="12">
            <transition-group name="generator-list" tag="div">
              <GeneratorListItem
                v-for="m in generators"
                :key="m.id"
                :model="m"
                :svg="true"
              />
            </transition-group>
          </b-col>

          <b-col lg="12">
            <div class="card py-2 my-2 border-secondary bg-transparent">
              <div class="card-body text-center">
                <font-awesome-icon size="lg" icon="info-circle" />
                <p class="mb-0 mt-2">
                  Looking for something we don't support?
                  <br />
                  Vote for
                  <a
                    href="https://github.com/codotype/feature-requests/issues"
                    target="_blank"
                  >
                    upcoming features
                  </a>
                  or open a
                  <a
                    href="https://github.com/codotype/feature-requests/issues/new"
                    target="_blank"
                  >
                    new request
                  </a>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </div>
  </section>
</template>

<script>
import GeneratorListItem from '@codotype/ui/src/modules/generator/components/GeneratorListItem.vue'
import generatorCollection from '~/assets/content/generators.json'
import { getPageMeta } from '~/assets/meta.js'

export default {
  components: {
    GeneratorListItem
  },
  head() {
    return {
      title: 'Codotype - Generators',
      meta: getPageMeta({})
    }
  },
  data() {
    return {
      filter: ''
    }
  },
  computed: {
    generators() {
      // Filters all generators and returns the result
      return generatorCollection.filter(g => {
        // Filters available generators based on this.filter data
        if (!this.filter) return true

        // Assembles query string for local filtering
        const queryString = [
          g.tech_tags.join(' '),
          g.type_tags.join(' '),
          g.label,
          g.description
        ]
          .join(' ')
          .toLowerCase()

        // Filters based on queryString and filter
        return queryString.includes(this.filter.toLowerCase())
      })
    }
  },
  methods: {
    clearFilter() {
      this.filter = ''
    }
  }
}
</script>

<style type="text/css">
.generator-list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.generator-list-enter,
.generator-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.generator-list-leave-active {
  position: absolute;
}
</style>
