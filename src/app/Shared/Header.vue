<template>
  <div id="our-girlfriend-header">
    <!-- Top menu -->
    <b-navbar toggleable="lg" class="row" type="dark">
      <div class="container col-md-10">
        <b-navbar-brand to="/">Ours Girls</b-navbar-brand>

        <b-navbar-nav class="ml-auto" right>
          <b-nav-item to="/About">About</b-nav-item>
          <b-nav-item to="/GUIDE" disabled>GUIDE</b-nav-item>
          <b-nav-item to="/NEWS" disabled>NEWS</b-nav-item>
          <b-nav-item to="/EXPANSIONS" disabled>EXPANSIONS</b-nav-item>
          <b-nav-item to="/MEDIA" disabled>MEDIA</b-nav-item>
          <b-nav-item to="/signIn">Sign-In</b-nav-item>
          <b-nav-item to="/signUp">Sign-Up</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'our-girlfriend-header'
}
</script>

<style scoped>
#our-girlfriend-header {
  background-color: #66CC00;
  position: fixed;
  z-index: 3;
  width: 100%;
}
</style>
