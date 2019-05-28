<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row mt-2">
        <div class="col-lg-12 text-center">
          <h1 class="display-1">Codotype</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="lead">
            visual code scaffolding for the modern web
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
          class="col-lg-12 text-center d-flex flex-column align-items-center"
        >
          <gh-btns-star slug="codotype/codotype" show-count />

          <br />

          <p class="lead mb-0 mt-2">
            <span>Built with </span>
            <font-awesome-icon icon="heart" class="text-danger" />
            <span class="px-1">by</span>
            <a href="https://github.com/aeksco" target="_blank">@aeksco</a>
          </p>

          <gh-btns-follow class="mt-3" user="aeksco" show-count />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Codotype - About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Instantly generate full-stack boilerplate code with custom CRUD.'
        },
        {
          property: 'og:url',
          content: 'https://codotype.io/about'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Codotype - Building Better Boilerplate'
        },
        {
          property: 'og:description',
          content:
            'Instantly generate full-stack boilerplate code with custom CRUD.'
        },
        {
          property: 'og:image',
          content: 'https://avatars2.githubusercontent.com/u/42126198?s=200&v=4'
        }
      ]
    }
  }
}
</script>
