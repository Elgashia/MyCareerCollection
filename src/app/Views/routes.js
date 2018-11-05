import * as component from './component'
import { Post } from '@/app/Shared'

export default [
  {
    path: '/About',
    component: component.About,
    name: 'about'
  },
  {
    path: '/News',
    component: component.News,
    name: 'news'
  },
  {
    path: '/News/:id',
    component: Post,
    name: 'post'
  }
]
