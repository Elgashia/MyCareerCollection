<template>
  <b-card style="margin:22px auto;width:95%;">
    <b-media>
      <img slot="aside" :src="img_src" alt="img" class="m-1" />
      <h5 class="mt-0">{{ title }}</h5>
      <p>
        {{ content }}
      </p>
      <p v-if="islink">
        {{ infoLink.explain }} <b-link class="card-link" :href="infoLink.link" variant="primary">{{ infoLink.linkContent }}</b-link>
      </p>
    </b-media>
    <b-button class="mb-12" variant="info" @click="routeBack">뒤로가기</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      title: '',
      content: '',
      img_src: '',
      islink: false,
      infoLink: ''
    }
  },
  methods: {
    routeBack () {
      this.$router.go(-1)
    }
  },
  created () {
    this.title = this.$route.params.data.title
    this.content = this.$route.params.data.content
    this.img_src = require('../../assets' + this.$route.params.data.img_src)
    if (this.$route.params.data.link) {
      this.islink = !this.islink
      this.infoLink = this.$route.params.data.link
    }
  }
}
</script>
