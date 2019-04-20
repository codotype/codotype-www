<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 class="display-3">Codotype</h1>
          </div>
        </div>

        <div class="row py-2">
          <div class="col-lg-12 text-center">
            <p class="lead">visual code scaffolding for the modern web</p>
            <p class="lead">
              Hand-crafted code scaffolding for the modern web
            </p>
            <p>
              Prototype new web applications amazingly fast
            </p>
            <p>
              Define your models, attributes, and relations - Codotype does the
              rest
            </p>
          </div>

          <div
            class="col-lg-12 text-center d-flex align-items-center justify-content-center"
          >
            <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <hr class="mt-2" />
          </div>
        </div>

        <div class="row mt-2 mb-4 justify-content-center">
          <div class="col-lg-4">
            <b-button to="/generators" size="lg" variant="primary" block>
              <font-awesome-icon icon="drafting-compass" />
              Start Your Next Project
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
