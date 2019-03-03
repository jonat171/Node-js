import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Salarie from './views/Salarie.vue'
import Projet from './views/Projet.vue'
import Client from './views/Client.vue'
import CreateClient from './views/CreateClient.vue'
import CreateProjet from './views/CreateProjet.vue'
import CreateSalarie from './views/CreateSalarie.vue'
import ClientDetail from './views/ClientDetail.vue'
import ProjetDetail from './views/ProjetDetail.vue'
import SalarieDetail from './views/SalarieDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projet',
      name: 'projet',
      component:Projet
    },
    {
      path: '/salarie',
      name: 'salarie',
      component: Salarie
    },
    {
      path: '/client',
      name: 'client',
      component: Client
    },
    {
      path: '/createclient',
      name: 'CreateCLient',
      component: CreateClient
    },
    {
      path: '/createprojet',
      name: 'CreateProjet',
      component: CreateProjet
    },
    {
      path: '/createsalarie',
      name: 'CreateSalarie',
      component: CreateSalarie
    },
    {
      path: '/client-detail/:id',
      name: 'ClientDetail',
      component: ClientDetail
    },
    {
      path: '/projet-detail/:id',
      name: 'ProjetDetail',
      component: ProjetDetail
    },
    {
      path: '/salarie-detail/:id',
      name: 'SalarieDetail',
      component: SalarieDetail
    }
    
    
  ]
})
