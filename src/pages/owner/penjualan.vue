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

                                <q-img style="width:50px;" :src="product.imgurl" />
                            </q-item-section>

                        </q-item>

                    </q-card-section>
                </q-card>
            </q-list>
        </div>
    </div>
    <!-- Qlist akhir -->
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

        }
    },

     async mounted(){
    const response = await 
    payments.getpay(window)
        {
          this.pay=response
        }
   },
}
</script>


