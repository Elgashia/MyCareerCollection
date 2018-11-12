import Vue from 'vue'

const news = [
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
]

export const getNews = (id) => {
  // 전달받은 id에 해당되는 데이터가 없는 경우. 경고창 띄우기.
  if (id) {
    return JSON.parse(Vue.localStorage.get('news-' + id))
  } else {
    return news
  }
}

export const addNews = (data) => {
  if (data) {
    return false
  } else {
    data.id = news.length
  }

  return true
}

export const deleteNews = () => {
  return true
}
