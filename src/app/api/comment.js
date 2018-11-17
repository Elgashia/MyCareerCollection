import localforage from 'localforage'

// const comment = [
//   {
//     cmtId: 1,
//     username: 'gentile',
//     pw: '1234',
//     comment: 'thk. new informations!',
//     postId: 1
//   },
//   {
//     cmtId: 2,
//     username: 'gentile',
//     pw: '1234',
//     comment: 'But are there any new news?',
//     postId: 1
//   },
//   {
//     cmtId: 3,
//     username: 'admin',
//     pw: '1234',
//     comment: 'test',
//     postId: 2
//   },
//   {
//     cmtId: 4,
//     username: 'gentile',
//     pw: '1234',
//     comment: 'test2',
//     postId: 2
//   }
// ]

export const getComment = async (id) => {
  let tmp = []
  const result = []

  // for (let i = 0; i < comment.length; i++) {
  //   await localforage.setItem('cmt-' + (i + 1), JSON.stringify(comment[i]))
  // }
  tmp = await localforage.startsWith('cmt-')
  Object.keys(tmp).forEach((key) => {
    var data = JSON.parse(tmp[key])
    if (data.postId === parseInt(id)) {
      result.push(data)
    }
  })

  if (result.length !== 0) {
    return result
  } else {
    return [{ comment: 'Comment is not a exist.', no: true }]
  }
}

export const addComment = async (data) => {
  if (data.username && data.comment) {
    let cmtLen = 0
    cmtLen = await localforage.startsWith('cmt-')
    cmtLen = Object.keys(cmtLen).length
    data['cmtId'] = cmtLen + 1

    localforage.setItem('cmt-' + (cmtLen + 1), JSON.stringify(data))
    return data
  } else {
    alert('username, comment를 모두 입력해주셔야합니다.')
  }
  return false
}

export const editComment = async (data, dummyData) => {
  if (data.comment !== dummyData) {
    await localforage.setItem('cmt-' + data.cmtId, JSON.stringify({ ...data, comment: dummyData }))
    alert('댓글이 수정되었습니다.')
    return true
  } else {
    alert('fuck!')
    return false
  }
}
