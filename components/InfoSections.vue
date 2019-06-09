<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div
          v-for="each in infoSections"
          :key="each.title"
          class="col-md-6 col-lg-4"
        >
          <div class="media">
            <div class="media-body text-center">
              <div class="color-icon mb-3">
                <font-awesome-icon
                  :icon="[each.fontAwesomePrefix, each.fontAwesomeIcon]"
                  class="text-primary"
                  size="2x"
                />
              </div>
              <h5 class="mt-0">{{ each.title }}</h5>
              {{ each.body }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    infoSections: {
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
