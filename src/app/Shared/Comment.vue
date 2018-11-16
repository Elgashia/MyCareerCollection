<template>
  <div role="group">
    <b-card>
      <b-form-group horizontal
                    :label-cols="2"
                    label="yourName:"
                    label-class="text-left"
                    label-for="userName">
        <b-form-input class="ml-0" id="userName" v-model.trim="comment.username" :state="null" type="text" placeholder="username"></b-form-input>
      </b-form-group>
      <b-input-group>
        <b-form-input id="inputLive"
                      v-model="comment.comment"
                      type="text"
                      placeholder="Enter Comment"></b-form-input>
        <b-input-group-append>
          <b-btn class="outline-light" @click="addcomment(comment)">댓글 달기</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-card>

    <b-card class="text-left mt-2 mb-2" :header="data.username ? data.username : ''" border-variant="info" v-for="(data, idx) in commentInfo" :key="idx">
      <p class="card-text">
        {{ data.comment }}
      </p>
    </b-card>
  </div>
</template>

<script>
import { getComment, addComment } from '@/app/api/comment'

export default {
  data () {
    return {
      comment: {
        postId: parseInt(this.$route.params.id),
        name: '',
        comment: ''
      },
      commentInfo: []
    }
  },
  methods: {
    async addcomment (comment) {
      const res = await addComment(comment)
      this.commentInfo = [ ...this.commentInfo, res ]
      return this.commentInfo
    }
  },
  created () {
    getComment(this.$route.params.id).then((res) => {
      this.commentInfo = res
    })
  }
}
</script>
