<template>
    <div class="text-black">
        <q-list bordered class="rounded-borders " >
        <q-item-label header>
            <b class="text-black"> Daftar Barang </b> 
        </q-item-label>
        
        <q-separator spaced class="q-mb-none"/>
        <q-separator spaced  class="q-mt-none"/>
        <q-item>

            <q-item-section top class="col gt-sm " style="max-width:35px">
            <q-item-label class="q-mt-sm text-weight-medium">No</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">Barang</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">Harga</q-item-label>
            </q-item-section>

            <q-item-section top class="col gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">kuantity</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm text-weight-medium ">
            <q-item-label class="q-mt-sm q-ml-md">Kategory</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">Descripsi</q-item-label>
            </q-item-section>

        </q-item>

        <q-separator spaced />
        <!-- Awal Data Barang -->
            <q-item class="bg-grey-2 col-2 text-black" v-for="(product, index ) in Pro" :key="product.id">
                <q-item-section top class="col gt-sm " style="max-width:35px">
                <q-item-label class="q-mt-sm col-0">{{index+1}}</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm text-weight-medium">
                <q-item-label class="q-mt-sm">{{product.product_name}}</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm text-weight-medium">
                <q-item-label lines="1">
                    <span class="text-weight-medium">{{product.harga}}</span>
                </q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm text-weight-medium">
                <q-item-label lines="1">
                    <span class="text-weight-medium">{{product.kuantity}}</span>
                </q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm text-weight-medium">
                <q-item-label lines="1">
                    <span class="text-weight-medium">{{product.product_kategory}}</span>
                </q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm text-weight-medium">
                <q-item-label lines="1">
                    <span class="text-weight-medium">{{product.product_desc}}</span>
                </q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>

import products from '../../api/Produk/index';

export default {
  data () {
    return {
      Pro: [
        { 

        }
      ]
    }
  },

  // Get data dari Api
  async mounted(){
    const response = await 
    products.getproduct(window)
        {
          this.Pro=response
        }
   }
}
</script>