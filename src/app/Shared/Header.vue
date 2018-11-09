<template>
  <!-- <div id="our-girlfriend-header"> -->
    <!-- Top menu -->
    <b-navbar id="our-girlfriend-header" vertical toggleable="lg" class="row" type="dark" sticky>
      <div class="container col-md-10">
        <b-navbar-brand to="/">Ours Girls</b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/About">ABOUT</b-nav-item>
          <b-nav-item to="/Guide" disabled>GUIDE</b-nav-item>
          <b-nav-item to="/News">NEWS</b-nav-item>
          <b-nav-item to="/Expansions" disabled>EXPANSIONS</b-nav-item>
          <b-nav-item to="/Media" disabled>MEDIA</b-nav-item>
          <b-nav-item to="/registNews">REGISTNEWS</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'our-girlfriend-header'
}
</script>

<style scoped>
#our-girlfriend-header {
  background-color: #66CC00;
  z-index: 3;
  top: 0;
}
</style>
