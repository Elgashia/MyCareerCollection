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
export default {
  name: 'news',
  data () {
    return {
      notice: [
        {
          id: 1,
          title: 'Blogspot 개발소식',
          content: '드디어 Blogspot의 개발 일정이 잡혔습니다! Blogspot은 인문, 사회, 경영, 판타지, 무협, 개발, 마케팅 등등 장르를 가리지 않고 서비스 운영되는 사이트입니다.',
          pre_content: '드디어 Blogspot의 개발 일정이 잡혔습니다! 자세한 내용은 아래 버튼을 클릭해주세요.',
          link: {
            link: 'https://trello.com/b/riibngDx/blogspot-project',
            explain: '개발 관련 참고 링크 : ',
            linkContent: 'Blogspot trello'
          },
          img_src: '/first_blogspot.png'
        },
        {
          id: 2,
          title: 'Test',
          content: 'test',
          pre_content: 'dummy content',
          img_src: '/first_blogspot.png'
        },
        {
          id: 3,
          title: 'Test2',
          content: 'test2',
          pre_content: 'dummy content2',
          img_src: '/first_blogspot.png'
        }
      ],
      newsList: []
    }
  },
  methods: {
    detailNews (id) {
      this.$router.push({ name: 'post', params: { id, data: this.newsList[id - 1] } })
    },
    getNews () {
      for (let i = 0; i < 3; i++) {
        this.newsList.push(JSON.parse(this.$localStorage.get('Id-' + i)))
      }
    }
  },
  created () {
    for (let i = 0; i < this.notice.length; i++) {
      this.$localStorage.set('Id-' + i, JSON.stringify(this.notice[i]))
    }
    this.getNews()
  }
}
</script>
