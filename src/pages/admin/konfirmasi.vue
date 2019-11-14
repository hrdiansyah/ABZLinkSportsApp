<template>
    <div class="q-pa-md q-gutter-md">
        <div class="row">
            <div class="col" style="align : center">
                <q-list bordered class="rounded-borders q-mx-auto" style="max-width: auto">
                    <q-card class=" my-card">
                        <q-card-section>
                                <q-item class="bg-indigo-13 col-0">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">ID</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nama Produk</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Harga Produk
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Jumlah Produk
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Total harga
          </q-item-label>
        </q-item-section>
        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Image
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center"> 
          <q-item-label class="q-mt-sm">Action
          </q-item-label>
        </q-item-section>

      </q-item>
        
        <!-- Tabel -->
      <q-item class="bg-grey-2 col-2 text-black" v-for="(product, index ) in pay" :key="product.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm col-0">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="gt-sm flex flex-center col-1 gt-sm">
          <q-item-label class="q-mt-sm">{{product.Nama_product}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium"> Rp. {{product.Harga_barang}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.Jumlah}} pcs</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">Rp. {{product.Total}}</span>
          </q-item-label>
        </q-item-section>
         <q-item-section top class="col-2 gt-sm flex flex-center">
          
           <q-img style="width:50px;"
                          :src="product.imgurl"
                          />
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label lines="1">
           
              <q-btn size="md" color="primary" icon="remove_red_eye" label="Lihat data" @click="see(product.id)" to="/cust/detail_transaksi" />
            
          </q-item-label>
        </q-item-section>
      </q-item>
                            
                        </q-card-section>
                    </q-card>
                </q-list>
            </div>
        </div>
        <!-- Qlist akhir -->
        <!-- popup -->
        <q-dialog v-model="dialog">
            <q-card>
                <q-card-section>
                    <div class="q-mx-auto" style="width: 400px">
                        <div class="row">
                            <div class="col">
                                <q-img :src="paym.imgurl" style="width: 200px" />
                            </div>
                            <div class="col">
                               
                            </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
        <!-- popup -->
        
    </div>
</template>

<script>
import payments from '../../api/transaksi/index';
export default {
    data() {
        return {
            dialog: false,
            images: [],
            pay: [{}],
            produk: [],
            paym:[]
        }
    },

    async mounted(){
    const response = await 
    payments.getpay(window)
        {
          this.pay=response
        }
   },

    methods: {
        // Method untuk delete data By ID
        onDelete(id) {
            if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
                carts.deleteCart(window, id)
                    .then((res) => {
                        carts.getCart(window)
                            .then((res) => {
                                this.Pro = res.data
                                this.$router.go('/customer/cart')
                            })
                            .catch(() => {
                                alert('Error load data');
                            })
                    })
                    .catch(() => {
                        alert('Error load data');
                    })
                console.log("delete called");
            }
        },
        show(cart) {
            let self = this
            this.dialog = true
            product.getproductbyId(window, cart.id_product)
                .then(function (result) {
                    self.images = result;
                })
                .catch(function (err) {
                    console.log(err);
                });
        },

        // method untuk Tambah data
        onSubmit() {
            const self = this
            carts.postCart(window, self.form.id, self.form.id_customer, self.form.id_product, self.form.imgurl)
                .then(function (result) {
                    self.$router.go('/customer/cart')
                })
                .catch(function (err) {
                    console.log(err);
                });
        },

        bayar(cart) {
            try {
                localStorage.setItem('id_cart', cart.id);
                this.$router.push('/cust/transaksi')
            } catch (error) {
                console.log(error.message)
            }
        },
        batal() {
            this.dialog = false
        },
        update(id) {

            const self = this
            products.putproduct(window, self.form.id, self.form.id_customer, self.form.id_product, self.form.imgurl)
                .then(function (result) {
                    self.$router.go('/customer/cart')
                })
                .catch(function (err) {
                    console.log(err);
                });
        },
        see(id) {
            let self = this
            this.dialog = true
            payments.getpaymentbyId(window, id)
                .then(function (result) {
                    self.paym = result;
                    consoloe.log(result)
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>

</style>
