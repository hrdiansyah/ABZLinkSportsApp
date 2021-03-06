const requireAuth = (to, from, next) => {

  let getRole= localStorage.getItem('role')
  if (getRole === null) { 
      alert('maaf anda belum login')
    next({
      
      path: '/login'
      
    })
  } 
   else {
    next()
  }
}
const routes = [
  
    // admin
    {
      path: '/admin/',
      component: () => import('layouts/admins.vue'),
      beforeEnter: requireAuth,
      children: [
        { path: '', component: () => import('pages/admin/dash.vue') },
        { path: 'barang', component: () => import('pages/admin/barang.vue') },
        { path: 'penjualan', component: () => import('pages/admin/penjualan.vue') },
        { path: 'konfirmasi', component: () => import('pages/admin/konfirmasi.vue') },
        { path: 'discount', component: () => import('pages/admin/discount.vue') }
        
      ]
    },
    // owner
  {
    path: '/owner/',
    component: () => import('layouts/own.vue'),
    beforeEnter: requireAuth,
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
    path: '/chart', component: () => import('pages/Login/Index.vue') 
  },
  
  {
  path: '/get', component: () => import('pages/get/get.vue')

  },
  {
    path: '/transaksi', component: () => import('pages/transaksi/index.vue')
  
    },
  
  
    // customer
    {
      path: '/cust/',
      component: () => import('layouts/customer.vue'),
      beforeEnter: requireAuth,
      children: [
        { path: 'dash', component: () => import('pages/customer/dash.vue') },
        { path: 'table', component: () => import('pages/customer/table.vue') },
        { path: 'detail', component: () => import('pages/customer/detail.vue') },
        { path: 'dialog', component: () => import('pages/customer/dialog.vue') },
        { path: 'header', component: () => import('pages/customer/header.vue') },
        { path: 'detail_transaksi', component: () => import('pages/customer/detail_transaksi.vue')},
        { path: 'pembayaran', component: () => import('pages/customer/pembayaran.vue')},
        { path: 'catalog', component: () => import('pages/customer/catalog.vue')},
        { path: 'cart', component: () => import('pages/customer/cart.vue')},
        { path: 'transaksi', component: () => import('pages/customer/transaksi.vue')},
        { path: 'Tabel_transaksi', component: () => import('pages/customer/tabel_transaksi.vue')}
      ]
    },
    {
      path: '/upload', component: () => import('pages/upload/upload.vue')
  
    },
  
    
    { path: '/reg', component: () => import('pages/customer/register.vue') },
    
    {
      path: '/commit/',
      component: () => import('pages/chart/visualization.vue'),
    },
    {
      path: '/get/',
      component: () => import('pages/get/get.vue'),
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
    // { 
    //   path: '/transaksi', component: () => import('pages/transaksi/index.vue') 
    // },
  ]

   
  // Always leave this as last one
  if (process.env.MODE !== 'ssr') {
    routes.push({
      path: '*',
      component: () => import('pages/Error404.vue')
    })
  }  
  
  
  export default routes 
