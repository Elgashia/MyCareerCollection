<template>
  <b-container style="max-width:85%;">
    <b-card style="margin:22px auto;">
      <b-media>
        <b-img rounded slot="aside" width="75" height="75" :src="img_src" class="m-1" />
        <h5 class="mt-0">{{ data.title }}</h5>
        <p>
          {{ data.content }}
        </p>
        <p v-if="islink">
          {{ infoLink.explain }} <b-link class="card-link" :href="infoLink.link" variant="primary">{{ infoLink.linkContent }}</b-link>
        </p>
        <b-media>
          <b-button class="mb-12" slot="aside" variant="info" @click="routeBack">뒤로가기</b-button>
        </b-media>
      </b-media>
    </b-card>
    <Comment></Comment>
  </b-container>
</template>

<script>
import { getNews } from '@/app/api/news'

import Comment from './Comment'

export default {
  name: 'post',
  data () {
    return {
      data: {},
      infoLink: {},
      islink: false,
      img_src: ''
    }
  },
  components: { Comment },
  methods: {
    routeBack () {
      this.$router.go(-1)
    }
  },
  created () {
    const id = this.$route.params.id
    getNews(id).then((res) => {
      this.data = res
      this.img_src = require('@/assets' + res.img_src)

      if (res.link) {
        this.islink = !this.islink
        this.infoLink = res.link
      }
    })
  }
}
</script>
