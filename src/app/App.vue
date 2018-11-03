<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// default components.
import Header from '@/app/Shared/Header'
import Footer from '@/app/Shared/Footer'

import '@/assets/css/app.css'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
