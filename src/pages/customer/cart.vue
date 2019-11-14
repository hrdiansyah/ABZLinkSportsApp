<template>
    <div class="q-pa-md q-gutter-md">
        <div class="row">
            <div class="col" style="align : center">
                <q-list bordered class="rounded-borders q-mx-auto" style="max-width: auto">
                    <q-card class=" my-card">
                        <q-card-section>
                            <div class="text-h6">Keranjang</div>
                            <div class="row ">
                                <div id="padding" class="col q-mx-auto  column q-ma-xs" flat v-for="item in Pro" :key="item.id" style="min-width:200px; max-width:250px" @click="show(item)">
                                    <div class="row">
                                        <div class="col q-ml-sm">
                                            <q-btn @click="show(item)" flat>
                                                <q-img
                                                    :src="item.imgurl"
                                                    style="width: 100px"
                                                    class="q-ma-sm"
                                                    />
                                            </q-btn>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col q-my-sm">
                                            <q-btn class="  q-mr-sm" outline color="primary" size="12px"   @click="bayar(item)">Bayar</q-btn>
                                            <q-btn  size="12px" outline color="primary"  @click="onDelete(item.id)">Dellete</q-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <q-img :src="images.imgurl" style="width: 200px" />
                            </div>
                            <div class="col">
                                Nama Produk : {{images.product_name}}<br>
                                Harga : Rp. {{images.harga}}<br>
                                Kategori : {{images.product_kategory}}<br>
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
import carts from '../../api/cart/index';
import product from '../../api/Produk/index';
import akuaja from '../../api/upload/index';
export default {
    data() {
        return {
            dialog: false,
            images: [],
            Pro: [],
            produk: [],

        }
    },

    beforeCreate() {
        let getIdCustomer = localStorage.getItem('id');
        let self = this;
        carts.getCartByCustomer(window, getIdCustomer)
            .then(function (result) {
                if (result) {
                    return self.Pro = result
                    product.getproductbyId(window, result.id_product)
                        .then(function (res) {
                            self.produk = res;
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                    
                }
            })
            .catch(function (err) {
                console.log(err);
            });
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
        }
    }
}
</script>

<style scoped>

</style>
