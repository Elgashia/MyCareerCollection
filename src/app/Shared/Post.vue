<template>
  <b-card style="margin:22px auto;width:95%;">
    <b-media>
      <img slot="aside" :src="require('@/assets' + data.img_src)" alt="img" class="m-1" />
      <h5 class="mt-0">{{ data.title }}</h5>
      <p>
        {{ data.content }}
      </p>
      <p v-if="islink">
        {{ infoLink.explain }} <b-link class="card-link" :href="infoLink.link" variant="primary">{{ infoLink.linkContent }}</b-link>
      </p>
    </b-media>
    <b-button class="mb-12" variant="info" @click="routeBack">뒤로가기</b-button>
  </b-card>
</template>

<script>
import { getNews } from '@/app/api/newsApi'

export default {
  name: 'post',
  data () {
    return {
      data: Object,
      infoLink: Object,
      islink: false
    }
  },
  methods: {
    routeBack () {
      this.$router.go(-1)
    }
  },
  created () {
    this.data = getNews(this.$route.params.id)

    if (this.data.link) {
      this.islink = !this.islink
      this.infoLink = this.data.link
    }
  }
}
</script>
