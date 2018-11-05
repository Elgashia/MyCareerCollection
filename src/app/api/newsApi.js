export const getNews = (id) => {
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

  var result = Object

  if (id) {
    news.forEach((data) => {
      if (data.id === parseInt(id)) {
        result = data
      }
    })
    return result
  } else {
    return news
  }
}
