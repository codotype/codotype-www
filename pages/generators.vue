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
            <div class="card-columns">
              <transition-group name="generator-list" tag="div">
                <GeneratorCard v-for="m in generators" :key="m.id" :model="m" />
              </transition-group>
            </div>
          </b-col>

          <b-col lg="12">
            <div class="card py-2 my-2 border-dark bg-transparent">
              <div class="card-body text-center">
                <font-awesome-icon size="lg" icon="info-circle" />
                <p class="mb-0 mt-2">
                  Looking for something we don"t support?
                  <br />
                  Take a look at our roadmap or vote for upcoming features
                  <!-- Open an issue or leave feedback here -->
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
import GeneratorCard from '@codotype/ui/src/modules/generator/components/GeneratorCard.vue'
import generatorCollection from '~/assets/content/generators.json'

export default {
  components: {
    GeneratorCard
  },
  head() {
    return {
      title: 'Codotype - Generators',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
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
