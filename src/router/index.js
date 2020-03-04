import VueRouter from 'vue-router'
//import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'
import AppGallery from '@/components/AppGallery'
import AddAppDetails from '@/components/AddAppDetails'
import EditAppGallery from '@/components/EditAppGallery'
import ShowAppDetails from '@/components/ShowAppDetails'

export default new VueRouter({
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
  ]
})
