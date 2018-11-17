<template>
  <div role="group">
    <b-card>
      <b-form-group horizontal
                    :label-cols="2"
                    label="yourName:"
                    label-class="text-left"
                    label-for="userName">
        <b-form-input class="ml-0" id="userName" v-model.trim="comment.username"
                      :state="null" type="text" placeholder="username"></b-form-input>
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

    <b-card class="text-left mt-2 mb-2" :header="data.username ? data.username : ''" border-variant="info"
            v-for="(data, idx) in commentInfo" :key="idx">
      <p class="card-text" v-if="!data.state">
        {{ data.comment }}
      </p>
      <b-form-input v-model="dumpcomment[idx]" type="text"
                    placeholder="Enter Comment" v-if="data.state"></b-form-input>

      <b-button v-if="!data.state && !data.no" @click="tryEdit(idx)" text-variant="gray" size="sm" class="mt-1 mr-1">edit</b-button>
      <b-button style="display:none;" v-if="!data.state" variant="info" size="sm" class="mt-1">delete</b-button>
      <b-button v-if="data.state" @click="editComment(idx, dumpcomment[idx])" text-variant="gray" size="sm" class="mt-1 mr-1">Confirm</b-button>
      <b-button v-if="data.state" @click="tryEdit(idx)" text-variant="gray" size="sm" class="mt-1">cansel</b-button>
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue'
import { getComment, addComment, editComment } from '@/app/api/comment'

export default {
  data () {
    return {
      comment: {
        postId: parseInt(this.$route.params.id),
        name: '',
        comment: ''
      },
      commentInfo: [],
      dumpcomment: [],
      state: false
    }
  },
  methods: {
    async addcomment (comment) {
      const res = await addComment(comment)
      this.commentInfo = [ ...this.commentInfo, res ]
      return this.commentInfo
    },
    tryEdit (idx) {
      var item = this.commentInfo[idx]
      if (item) {
        this.dumpcomment[idx] = item.comment
        Vue.set(this.commentInfo, idx, { ...item, state: !item.state })
      }
    },
    editComment (idx, dump) {
      var item = this.commentInfo[idx]
      editComment(item, dump).then(res => {
        if (res) {
          item.comment = dump
        }
        Vue.set(this.commentInfo, idx, { ...item, state: !item.state })
      })
    }
  },
  created () {
    getComment(this.$route.params.id).then((res) => {
      this.commentInfo = res

      this.commentInfo.forEach((data) => {
        this.dumpcomment.push(data.comment)
        data['state'] = false
      })
    })
  }
}
</script>
