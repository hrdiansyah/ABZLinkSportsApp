// const requireAuth = (to, from, next) => {

//   let getRole= localStorage.getItem('role')
//   if (getRole === null) { 
//       alert('maaf anda belum login')
//     next({
      
//       path: '/login'
      
//     })
//   } 
//    else {
//     next()
//   }
// }

// const requireAuth = (to, from, next) => {

//   let getRole= localStorage.getItem('role')
//   let isLogin = localStorage.getItem('email')
//   if (isLogin === null) { 
//     next({
//       path: '/login'
//     })
// //   // } if (isLogin && getRole === 'admin') {
// //   //   next({
// //   //     path: '/admin'
// //   //   })
// //   // } if (isLogin && getRole === 'customer') {
// //   //   next({
// //   //     path: '/cust/dash'
// //   //   })
//   } else {
//     next()
//   }
// }



const routes = [
  
    // admin
    {
      path: '/admin/',
      component: () => import('layouts/admin.vue'),
      // beforeEnter: requireAuth,
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
    // beforeEnter: requireAuth,
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
  path: '/get', component: () => import('pages/get/get.vue')

  },
  {
    path: '/transaksi', component: () => import('pages/transaksi/index.vue')
  
    },
  
  
    // customer
    {
      path: '/cust/',
      component: () => import('layouts/customer.vue'),
      // beforeEnter: requireAuth,
      children: [
        { path: 'dash', component: () => import('pages/customer/dash.vue') },
        { path: 'table', component: () => import('pages/customer/table.vue') },
        { path: 'reg', component: () => import('pages/customer/register.vue') },
        { path: 'detail', component: () => import('pages/customer/detail.vue') },
        { path: 'dialog', component: () => import('pages/customer/dialog.vue') },
        { path: 'header', component: () => import('pages/customer/header.vue') },
        { path: 'detail_transaksi', component: () => import('pages/transaksi/index.vue')},
        { path: 'pembayaran', component: () => import('pages/customer/pembayaran.vue')},
        { path: 'catalog', component: () => import('pages/customer/catalog.vue')},
        { path: 'transaksi', component: () => import('pages/customer/transaksi.vue')}
      ]
    },
    {
      path: '/upload', component: () => import('pages/upload/upload.vue')
  
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
