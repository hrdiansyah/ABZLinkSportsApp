
const routes = [
  
  // admin
  {
    path: '/admin/',
    component: () => import('layouts/admin.vue'),
    children: [
      { path: 'dash', component: () => import('pages/admin/dash.vue') },
      { path: 'table', component: () => import('pages/admin/table.vue') }
     
    ]
  },

  // customer
  {
    path: '/cust/',
    component: () => import('layouts/customer.vue'),
    children: [
      { path: 'dash', component: () => import('pages/customer/dash.vue') },
      { path: 'table', component: () => import('pages/customer/table.vue') },
      { path: 'reg', component: () => import('pages/customer/register.vue') },
      { path: 'detail', component: () => import('pages/customer/detail.vue') },
      { path: 'dialog', component: () => import('pages/customer/dialog.vue') }
    ]
  },

  // owner
  {
    path: '/owners/',
    component: () => import('pages/owner/dash.vue'),
  },

  { 
    path: '/own-index',
    component: () => import('pages/owner/index.vue')
  },
  

  //LOGIN
  { 
    path: '/login', component: () => import('pages/Login/Index.vue') 
  },
  { 
    path: '/', component: () => import('pages/landing/index.vue') 
  },
  { 
    path: '/user', component: () => import('pages/user/index.vue') 
  }
  
  
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
