import Vue from 'vue'

const comment = [
  {
    cmtId: 1,
    username: 'gentile',
    pw: '1234',
    comment: 'thk. new informations!',
    postId: 1
  },
  {
    cmtId: 2,
    username: 'gentile',
    pw: '1234',
    comment: 'But are there any new news?',
    postId: 1
  },
  {
    cmtId: 3,
    username: 'admin',
    pw: '1234',
    comment: 'test',
    postId: 2
  },
  {
    cmtId: 4,
    username: 'gentile',
    pw: '1234',
    comment: 'test2',
    postId: 2
  }
]

export const getComment = (id) => {
  var result = []
  for (let key in localStorage) {
    if (localStorage.key(key).includes('cmt')) {
      console.log(Vue.localStorage.get(localStorage.key(key)))
      if (parseInt(Vue.localStorage.get(localStorage.key(key)).postId) === parseInt(id)) {
        result.push(comment[key])
      }
    }
  }

  if (result.length !== 0) {
    return result
  } else {
    return [{ comment: 'Comment is not a exist.' }]
  }
}

export const addComment = (data) => {
  if (data.name && data.comment) {
    Vue.localStorage.set('cmt-' + comment.length, JSON.stringify(data))
    comment.push({ data })
  }
  return false
}
