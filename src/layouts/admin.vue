<template>
  <q-layout>
      <div class="q-pa-sm">
          <div class="row bg-grey-10 text-white rounded" style="height:70px">
              <div class="col  q-my-lg q-ml-lg" style="max-width:40%">
                  <q-btn flat round dense icon="menu" class="q-mr-md" />AbzLinkSport
              </div>
              <div class="col  q-my-lg q-ml-lg" style="max-width:55%">
                  <button style="max-width:30%" class="float-right q-mr-md">Cari</button>
                  <input type="text" v-model="search" placeholder="Search" class="q-mr-sm float-right" style="max-width:60%">
              </div>

              <div class="col bg-white q-my-md q-mr-xs" style="max-width:1px" />

              <div class="col flex flex-center" style="max-width:80px">
                  <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar.png">
                  </q-avatar>
              </div>
          </div>
          <div class="row bg-grey-10">
              <div class="col">
                  <hr class="text-white">
              </div>
          </div>

          <!-- body -->
          <div class="row q-my-md">
              <div class="col">
                  <div class="row  text-white">
                      <div class="col " style="max-width:200px ">
                          <q-card class="my-card bg-grey-10" tyle="max-height:100%">
                              <q-card-section>
                                  <q-list>
                                    <q-item-label header>Welcome Admin</q-item-label>
                                    <q-item clickable tag="a" href="/#/admin">
                                      <q-item-section avatar>
                                        <q-icon name="school" />
                                      </q-item-section>
                                      <q-item-section>
                                        <q-item-label>Dashboard</q-item-label>
                                        <q-item-label caption>Hal. Dash</q-item-label>
                                      </q-item-section>
                                    </q-item>

                                    <q-item clickable tag="a" href="/#/admin/barang">
                                      <q-item-section avatar>
                                        <q-icon name="school" />
                                      </q-item-section>
                                      <q-item-section>
                                        <q-item-label>Data Barang</q-item-label>
                                        <q-item-label caption>Hal. Barang</q-item-label>
                                      </q-item-section>
                                    </q-item>

                                    <q-item clickable tag="a" href="/#/admin/penjualan">
                                      <q-item-section avatar>
                                        <q-icon name="school" />
                                      </q-item-section>
                                      <q-item-section>
                                        <q-item-label>Penjualan</q-item-label>
                                        <q-item-label caption>Hal. Penjualan</q-item-label>
                                      </q-item-section>
                                    </q-item>

                                    <q-item clickable tag="a" href="/#/admin/konfirmasi">
                                      <q-item-section avatar>
                                        <q-icon name="school" />
                                      </q-item-section>
                                      <q-item-section>
                                        <q-item-label>Konfirmasi</q-item-label>
                                        <q-item-label caption>Hal. konfirmasi</q-item-label>
                                      </q-item-section>
                                    </q-item>
                                  
                                    <q-item clickable>
                                      <q-btn @click='logout()' flat >
                                          <q-item-section avatar>
                                            <q-icon name="logout" />
                                          </q-item-section>
                                          <q-item-section>
                                            <q-item-label >Logout</q-item-label>
                                          </q-item-section>
                                      </q-btn>
                                    </q-item>
                                  </q-list>
                              </q-card-section>
                          </q-card>
                      </div>
                      <div class="col q-ml-md" style="max-width:100%">

                          <q-page-container>
                              <router-view />
                          </q-page-container>

                      </div>
                  </div>
              </div>
          </div>
          <!-- body -->
      </div>
  </q-layout>
</template>

<script>
export default{
  data(){
    return{
      
    }
  },
  
  
  async  mounted(){
    let getRole = await localStorage.getItem('role');
    if(getRole ==='owner'){
         this.$router.push('/owner/')
      }
      else if(getRole ==='customer'){
         this.$router.push('/cust/dash')
      }   
    },
    methods :{
      logout(){
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        localStorage.removeItem('imgurl');
        localStorage.removeItem('id_cart');
        localStorage.removeItem('id');
        localStorage.removeItem('id_product');
        localStorage.removeItem('id_transaksi');
        this.$router.push('/login');
      }
    }
  }
  
      
    
</script>
