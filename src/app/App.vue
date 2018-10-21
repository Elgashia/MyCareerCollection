<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
// default components.
import Header from './Shared/Header'

import '../assets/css/app.css'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
