
const routes = [
  
    // admin
    {
      path: '/admin/',
      component: () => import('layouts/admin.vue'),
      children: [
        { path: '', component: () => import('pages/admin/dash.vue') },
        { path: 'barang', component: () => import('pages/admin/barang.vue') },
        { path: 'penjualan', component: () => import('pages/admin/penjualan.vue') },
        { path: 'konfirmasi', component: () => import('pages/admin/konfirmasi.vue') }
       
      ]
    },
    // owner
  {
    path: '/owner/',
    component: () => import('layouts/own.vue'),
    children: [
    {path: '',component: () => import('pages/owner/dashboard.vue')},
    {path: 'barang',component: () => import('pages/owner/barang.vue')},
    {path: 'penjualan',component: () => import('pages/owner/penjualan.vue')}
    ]
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
  },
  { 
    path: '/transaksi', component: () => import('pages/transaksi/index.vue') 
  },
  { 
    path: '/google', component: () => import('pages/Google/index.vue') 
  },
  { 
    path: '/yt', component: () => import('pages/Google/tes.vue') 
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
        { path: 'dialog', component: () => import('pages/customer/dialog.vue') },
        { path: 'header', component: () => import('pages/customer/header.vue') }
      ]
    },


  
    
    
    {
      path: '/commit/',
      component: () => import('pages/contoh.vue'),
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
    },
    { 
      path: '/transaksi', component: () => import('pages/transaksi/index.vue') 
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
  