<template>
  <q-layout view="hHh Lpr fFf" class="bg-grey-3">
    <div class="q-pa-xs ">
      <div class="row">
        <div class="col bg-grey-10 hide" >
          <q-toolbar class=" text-white  " >
            <q-btn flat label="Homepage" />
            <q-space />
          </q-toolbar>

          <q-toolbar class=" text-white ">
            <q-tabs  shrink  style="min-width:240px">
              <q-tab name="tab1" label="About" />
<<<<<<< HEAD
              <q-tab name="tab2" label="Products" to="/cust/catalog" />
              <q-tab name="tab3" label="Contact Us" />
=======
              <q-tab name="tab2" label="Products" />
              <q-tab name="tab4" label="Contact Us" />
>>>>>>> 38a54d3739f3b5ddd425749bea506fd240d10b0a
            </q-tabs>
            <q-space />
          </q-toolbar>
        </div>
        
        <!-- button hide -->
        <div class="col bg-grey-10 show height" >
          <q-btn flat @click="drawerLeft = !drawerLeft"  dense icon="menu"  class=" text-white header_left_show q-ml-lg" size="lg"/>
        </div>

        <!-- awal account -->
        <div class="col bg-grey-10 " style="min-width:400px">
          <q-btn color="white" class="text-white float-right q-mr-lg transparent account hide q-ml-md" flat round>
            <q-icon name="account_circle" size="md"/>
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">Settings</div>
                  <hr/>
                  <div class="q-mb-md">Transaksi</div>
                  <div class="q-mb-md">Tagihan</div>

                </div>

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                  <q-btn
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    @click="logout()"
                  />
                </div>
              </div>
            </q-menu>
          </q-btn>
          <!-- akhir account -->

          <q-btn  class="float-right cart hide" flat to="/cust/cart/" style="height:20px"> 
          <q-icon name="add_shopping_cart" class="text-white hide  q-mt-none" size="md"/>
          </q-btn>  
          <q-btn class="bg-white float-right mr q-mx-md" size="sm" >Cari</q-btn>
          <q-input type="text" placeholder="Search......!" class="bg-white float-right  mr" style="max-width:200px;max-height:25px" />
        </div>
          
      </div>

      <!-- garis horizontal -->
      <div class="row bg-grey-10">
          <div class="col">
              <hr class="text-white">
          </div>
      </div>

    <!-- awal Drawer -->
      <q-drawer
        class="show"
        v-model="drawerLeft"
        :width="250"
        content-class="bg-grey-10 text-white"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-xs">
            <q-card class="my-card bg-grey-10" flat tyle="max-height:100%">
                <q-card-section>
                    <q-list>
                      <q-item-label header class="text-white text-center " size="md"> Welcome Admin </q-item-label>
                      <hr class="text-white"/>
                      <q-item clickable tag="a" href="/#/admin">
                        <q-item-section avatar>
                          <q-icon name="brightness_auto" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>About</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable tag="a" href="/#/admin/barang">
                        <q-item-section avatar>
                          <q-icon name="school" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Product</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable tag="a" href="/#/admin/penjualan">
                        <q-item-section avatar>
                          <q-icon name="school" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Men</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable tag="a" href="/#/admin/konfirmasi">
                        <q-item-section avatar>
                          <q-icon name="school" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Women</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable tag="a" href="/#/admin/konfirmasi">
                        <q-item-section avatar>
                          <q-icon name="add_shopping_cart" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Keranjang</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable tag="a" href="/#/admin/konfirmasi">
                        <q-item-section avatar>
                          <q-icon name="menu_book" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Tagihan</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable tag="a" href="/#/admin/konfirmasi">
                        <q-item-section avatar>
                          <q-icon name="drive_eta" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>R. Pengiriman</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable tag="a" href="/#/admin/konfirmasi">
                        <q-item-section avatar>
                          <q-icon name="account_circle" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Profil</q-item-label>
                        </q-item-section>
                      </q-item>

                    </q-list>
                </q-card-section>
            </q-card>
          </div>
        </q-scroll-area>
      </q-drawer>
    <!-- awal Drawer -->

      <q-page-container class="q-mx-none">
        <router-view />
      </q-page-container>

    <!-- Awal Footer -->
      <q-card class="my-card bg-grey-10">
      <q-card-section>
        <div class="row q-ma-md text-white"  >
          <div class="col " style="max-width:30%">
            <h6 class="q-ma-none q-mb-sm">Service</h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been  
          </div>

          <div class="col bg-white q-ma-sm" style="max-width:1px ">
              
          </div>

          <div class="col " style="max-width:30%">
              <div class="q-mx-sm">
                  <h6 class="q-ma-none ">Categories</h6>
                  <p class="q-ma-none">Product <br>About Us <br>Testimoni <br>Price Tables <br> Crew <br> Portofolio
                  </p>
              </div>
          </div>

          <div class="col " style="max-width:30%">
              <h6 class="q-my-none q-mb-sm q-ml-lg" >Partner</h6>
              <div class="q-ml-lg">
              Product <br>About Us <br>Testimoni <br>Price Tables <br> Crew <br> Portofolio
              </div>
          </div>

          <div class="col bg-white q-ma-sm" style="max-width:1px ">
            
          </div>

          <div class="col flex flex-center " >
            <q-btn @click='logout()' flat >
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>
                <q-item-section>
                  <q-item-label >Logout</q-item-label>
                </q-item-section>
            </q-btn>
          </div>
        </div>
      </q-card-section> 
    </q-card >
    <!-- Akhir Footer -->
    </div>
  </q-layout>
</template>

<script>
export default{
  data(){
    return{
      drawerLeft: false,
    }
  },
  batal(){
        alert = false
      },
      beli(){
        let self = this;
        self.$router.push("/cust/cart/")
      },
  // async  mounted(){
  //   let getRole = await localStorage.getItem('role');
  //   if(getRole !='customer' || getRole ==='owner'){
  //        this.$router.push('/owner/')
  //     }
  //      else if(getRole !='customer' || getRole ==='admin'){
  //        this.$router.push('/admin')
  //     } else {
  //       alert(' anda login sebagai customer')
  //     } 
  //   },
    methods :{
      logout(){
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        this.$router.push('/login');
      }
    }
  }
</script>