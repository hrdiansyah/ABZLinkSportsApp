<template>
<div class="q-pa-md q-gutter-md">
  <q-item class="bg-grey-2 col-2 text-black" v-for="(product, index ) in Pro" :key="product.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm col-0">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="gt-sm flex flex-center">
          <q-item-label class="q-mt-sm">{{product.product_name}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.harga}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.kuantity}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.product_kategory}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.imgurl}}</span>
          </q-item-label>
        </q-item-section>
         <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.imgurl}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex flex-center">
          <q-item-label lines="1">
           
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(product)"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onGet(product)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            
          </q-item-label>
        </q-item-section>
      </q-item>
</div>
</template>
<style scoped>

</style>
<script>

import product from '../../api/cart/index'
export default {
    onGet(){
        let self=this
        product.getproduct(window)
        .then((res)=>{
            this.$router.go('cust/cart');
        })
        .catch(()=>{
            alert('Error Load Data');
        })
    }
}
</script>
