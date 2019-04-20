<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-navbar-brand to="/">
      <strong>Codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item to="/generators">
          Generators
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">
          <font-awesome-icon icon="question-circle" />
          About
        </b-nav-item>

        <b-nav-item href="https://codotype.org" target="_blank">
          <font-awesome-icon icon="book" class="text-info" />
          Docs
        </b-nav-item>

        <!-- <b-nav-item to="https://codotype.org" target="_blank">
          <font-awesome-icon icon="dollar-sign" class="text-success" />
          Donate
        </b-nav-item> -->

        <b-nav-item target="_blank" href="https://twitter.com/codotype">
          <font-awesome-icon :icon="['fab', 'twitter']" class="text-primary" />
          Twitter
        </b-nav-item>

        <b-nav-item target="_blank" href="https://github.com/codotype">
          <font-awesome-icon :icon="['fab', 'github']" />
          GitHub
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav.navbar {
  border-bottom: 1px solid #d3d3d3;
}
</style>
