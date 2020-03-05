import Router from 'vue-router';
//import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'
import AppGallery from '@/components/AppGallery'
import AddAppDetails from '@/components/AddAppDetails'
import EditAppGallery from '@/components/EditAppGallery'
import ShowAppDetails from '@/components/ShowAppDetails'
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import firebase from 'firebase';
import Vue from 'vue';
import EditAppGalleryList from '@/components/EditAppGalleryList.vue';



Vue.use(Router)
/* export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'AppGallery',
      component: AppGallery
    },
    {
      path: '/show-board/:id',
      name: 'ShowBoard',
      component: ShowBoard
    },
    {
      path: '/add-board',
      name: 'AddBoard',
      component: AddBoard
    },
    {
      path: '/add-appgallery',
      name: 'AddAppDetails',
      component: AddAppDetails
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard
    },
    {
      path: '/edit-appgallery/:id',
      name: 'EditAppGallery',
      component: EditAppGallery
    },
    {
      path: '/show-appdetails/:id',
      name: 'ShowAppDetails',
      component: ShowAppDetails
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
}) */

const router = new Router({
  routes: [
  {
    path: '/',
    name: 'AppGallery',
    component: AppGallery
  },
  {
    path: '/EditAppGalleryList',
    name: 'EditAppGalleryList',
    component: EditAppGalleryList,
    meta:{
      requireAuth:true
    }
  },
  {
    path: 'show-board/:id',
    name: 'ShowBoard',
    component: ShowBoard,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/add-board',
    name: 'AddBoard',
    component: AddBoard,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/add-appgallery',
    name: 'AddAppDetails',
    component: AddAppDetails,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/edit-board/:id',
    name: 'EditBoard',
    component: EditBoard,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/edit-appgallery/:id',
    name: 'EditAppGallery',
    component: EditAppGallery,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/show-appdetails/:id',
    name: 'ShowAppDetails',
    component: ShowAppDetails,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }
]});

router.beforeEach((to,from,next)=>{
  const currentuser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requireAuth);
  
  if(requiresAuth && !currentuser) next('login');
  else if(!requiresAuth && currentuser) next('EditAppGalleryList');
  else next()
});

export default router;