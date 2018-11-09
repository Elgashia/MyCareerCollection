<template>
  <b-container style="max-width:85%;">
    <b-card style="margin:22px auto;">
      <b-media>
        <b-img rounded slot="aside" width="75" height="75" :src="require('@/assets' + data.img_src)" class="m-1" />
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
import { getNews } from '@/app/api/newsApi'
import Comment from './Comment'

export default {
  name: 'post',
  data () {
    return {
      data: Object,
      infoLink: Object,
      islink: false
    }
  },
  components: { Comment },
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
