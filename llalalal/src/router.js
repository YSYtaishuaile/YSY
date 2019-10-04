import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import Book from './views/Book.vue';
import Photo from './views/Photo.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/music',
      name: 'music',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Music, 
    },
    {
      path:'/book',
      name:'book',
      component: Book,
    },
    {
      path:'/photo',
      name:'photo',
      component:Photo
    }
  ],
});
