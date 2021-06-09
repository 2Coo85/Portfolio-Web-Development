/* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../src/views/Home.vue';
import About from '../src/views/About.vue';
import Contact from '../src/views/Contact.vue';
import Projects from '../src/views/Projects.vue';
import Resume from '../src/views/Resume.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume
    }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
  
export default router;
  