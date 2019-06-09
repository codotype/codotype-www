<template>
  <div id="footer" class="section bg-light mt-4">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <span class="d-flex flex-row align-items-center">
            <img
              src="https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png"
              style="width: 2rem; height: 2rem;"
              class="logo-dark"
              alt="Codotype Logo"
            />
            <p class="ml-3 mb-0">
              <span
                >Codotype is a code generation tool for the modern web.</span
              >
              <br />
            </p>
          </span>
          <div class="mt-4">
            <gh-btns-star slug="codotype/codotype" show-count />
          </div>
        </div>
        <!-- // end .col-sm-3 -->
        <div class="col-sm-2">
          <ul class="list-unstyled footer-links ml-1">
            <li>
              <nuxt-link to="/generators">
                Generators
              </nuxt-link>
            </li>
            <li>
              <a target="_blank" href="https://codotype.org">
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <!-- // end .col-sm-3 -->
        <div class="col-sm-2">
          <ul class="list-unstyled footer-links ml-1">
            <li>
              <nuxt-link to="/about">
                About
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- // end .col-sm-3 -->
        <div class="col-sm-2">
          <ul class="list-unstyled footer-links ml-1">
            <li>
              <a target="_blank" href="https://github.com/codotype/codotype">
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/codotype">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <!-- // end .col-sm-3 -->
        <div class="col-sm-2">
          <a href="#home" class="btn btn-sm btn-outline-primary ml-1">
            Go to Top
          </a>
        </div>
        <!-- // end .col-sm-3 -->
      </div>
      <!-- // end .row -->
      <div class="text-center mt-4">
        <small class="text-muted">
          Copyright © {{ new Date().getFullYear() }}
          Codotype Inc. All rights reserved.
        </small>
      </div>
    </div>
    <!-- // end .container -->
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

.footer-links {
  li {
    padding: 0.2em 0;
  }
  a {
    color: $gray-light;
    &:hover {
      text-decoration: none;
      color: $brand-primary;
    }
  }
}
</style>
