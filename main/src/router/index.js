import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'
import MainBkgd from '../assets/green-waterfall.jpg'
import SecondBkgd from '../assets/blurry-waterfall.jpg'
import SmallBkgd from '../assets/gradient.jpg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { bgImage: MainBkgd}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { bgImage2: SecondBkgd }
  },
  {
    path: '/contact',
    name:'Contact',
    component: Contact,
    meta: { bgImage2: SecondBkgd }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { bgImage2: SecondBkgd }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: { bgImage2: SecondBkgd }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(to => {
  if (to.meta && to.meta.bgImage) {
    document.body.style.backgroundImage = `url(${to.meta.bgImage})`;
    document.body.style.backgroundPosition = 'center top'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
  } if (to.meta && to.meta.bgImage2){
    document.body.style.backgroundImage = `url(${SecondBkgd})`;
    document.body.style.backgroundPosition = 'right top'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
  } if (document.body.style.width == '600px') {
    document.body.style.backgroundImage= `url(${SmallBkgd})`
    document.body.style.backgroundRepeat = 'repeat-y'
  }
})

export default router;
