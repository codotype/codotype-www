<template>
  <NavbarWrapper>
    <template slot="brand">
      <NavbarBrand url="/" />
    </template>

    <template slot="links">
      <b-navbar-nav class="mr-auto">
        <b-nav-item to="/generators">Generators</b-nav-item>
      </b-navbar-nav>
      <NavbarLinks svgs />
    </template>
  </NavbarWrapper>
</template>

<script>
import NavbarWrapper from '@codotype/ui/src/components/Navbar/NavbarWrapper.vue'
import NavbarBrand from '@codotype/ui/src/components/Navbar/NavbarBrand.vue'
import NavbarLinks from '@codotype/ui/src/components/Navbar/NavbarLinks.vue'
export default {
  name: 'Navbar',
  components: {
    NavbarWrapper,
    NavbarBrand,
    NavbarLinks
  }
}
</script>
