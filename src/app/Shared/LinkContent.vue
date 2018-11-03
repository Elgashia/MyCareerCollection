<template>
  <p>
    {{ infoLink.explain }} <b-link class="card-link" :href="infoLink.link" variant="primary">{{ infoLink.linkContent }}</b-link>
  </p>
</template>

<script>
export default {
  props: {
    infoLink: Object
  }
}
</script>
