<template>
  <div id="news">
    <b-card-group deck>
      <b-card :title="data.title"
              tag="article"
              class="mb-3" :key="index" v-for="(data, index) in newsList"
              style="max-width:20rem;margin:12px auto">
        <p class="card-text">
          {{ data.pre_content ? data.pre_content : data.content }}
        </p>
        <b-button variant="primary" @click="detailNews(data.id)">more</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { getNews } from '@/app/api/news'

export default {
  name: 'news',
  data () {
    return {
      newsList: []
    }
  },
  methods: {
    detailNews (id) {
      this.$router.push({ name: 'post', params: { id } })
    }
  },
  created () {
    getNews().then((res) => {
      this.newsList = res
    })
  }
}
</script>
