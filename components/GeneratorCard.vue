<template>
  <div class="card shadow border-light">
    <div class="card-body">
      <div class="row d-flex align-items-end flex-column">
        <div class="col-lg-12 d-flex justify-content-center">
          <p class="lead mb-0">
            <b-btn
              variant="link"
              :to="`/generators/${model.id}`"
              class="d-flex align-items-center flex-column"
              style="text-decoration: none"
            >
              <img class="generator-icon mb-2" :src="model.icon" />
              {{ model.label }}
            </b-btn>
          </p>
        </div>

        <div class="col-lg-12">
          <p class="card-text mt-2">
            <small>{{ model.description }}</small>
          </p>
        </div>
      </div>
    </div>

    <div class="card-footer bg-white border-top-none">
      <nuxt-link
        :to="`/generators/${model.id}`"
        class="btn btn-block btn-xl btn-primary rounded-pill"
      >
        <span class="d-flex justify-content-center align-items-center">
          Let's Go!
          <ChevronAnimation active svg />
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ChevronAnimation from '@codotype/ui/src/components/ChevronAnimation.vue'
export default {
  name: 'GeneratorCard',
  components: {
    ChevronAnimation
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.border-top-none {
  border-top: none;
}
</style>
