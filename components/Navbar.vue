<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <div class="container">
      <div class="d-flex flew-row align-items-center">
        <img
          src="https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png"
          style="margin-right: .5rem; margin-top: 0.25rem; height: 1.5rem; width: 1.5rem; float: left;"
          alt="Codotype Logo"
        />
        <b-navbar-brand to="/">
          <h3 class="gradient-mask mb-0">codotype</h3>
        </b-navbar-brand>
      </div>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item to="/generators">Generators</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about">
            <font-awesome-icon icon="question-circle" class="mr-1" />About
          </b-nav-item>

          <b-nav-item href="https://codotype.org" target="_blank">
            <font-awesome-icon icon="book" class="text-info mr-1" />Docs
          </b-nav-item>

          <!-- <b-nav-item to="https://codotype.org" target="_blank">
            <font-awesome-icon icon="dollar-sign" class="text-success" />
            Donate
          </b-nav-item>-->

          <b-nav-item target="_blank" href="https://twitter.com/codotype">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="text-primary mr-1"
            />
            Twitter
          </b-nav-item>

          <b-nav-item target="_blank" href="https://github.com/codotype">
            <font-awesome-icon :icon="['fab', 'github']" class="mr-1" />GitHub
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

.gradient-mask {
  // -webkit-text-fill-color: transparent;
  // -webkit-background-clip: text;
  // background-clip: text;
  // background-image: -webkit-gradient(linear, left top, right top, from($brand-primary), to($brand-secondary));
  color: #555555;
}

.navbar {
  font-family: $heading-font;
  transition: all 0.3s ease;
  padding: 0.4rem;
  background: #ffffff !important;
  box-shadow: 0px 9px 68px 0px rgba(62, 57, 107, 0.1);
  // border-bottom: 1px solid rgba( $white, .2);
  // border-bottom: 1px solid #d3d3d3;
  // padding: 1rem !important;
}

.nav-link {
  font-size: 16px;
}
</style>
