<template>
<div>
    <div class="row">
        <div class="col q-my-sm">
            
                <q-toggle
                :label="`Model is ${blueModel} (default behaviour)`"
                v-model="blueModel"
                />

                <q-toggle
                :label="pinkModel"
                color="pink"
                false-value="Disagreed"
                true-value="Agreed"
                v-model="pinkModel"
                />

                <q-toggle
                :false-value="13"
                :label="`Model is number ${greenModel}`"
                :true-value="42"
                color="green"
                v-model="greenModel"
                />

                <q-toggle
                :false-value="true"
                :label="`Model is ${redModel} (flipped boolean)`"
                :true-value="false"
                color="red"
                v-model="redModel"
                />
        </div>
    </div>

    <div class="row " >
        <div id="padding" class="col q-mx-auto  column q-ma-xs" v-for="item in images" :key="item.id" style="min-width:200px; max-width:250px">
            <q-img style="width:200px; height:250px " class="q-mx-auto"
                :src="item.imgurl"
            />
            <div class="align text-body2 q-mt-sm"><b> {{item.product_name}}</b></div>
            <div class="align text-caption">Rp.  {{item.harga}} </div>
            <q-rating
                class="q-mx-auto responsive"
                v-model="ratingModel"
                size="1.5em"
                color="indigo-10"
                :max="5"
                readonly
            />
        </div>
    </div>

    <div class="row " >
        <div id="padding" class="col q-mx-auto  column q-ma-xs" v-for="item in images" :key="item.id" style="min-width:200px; max-width:250px">
            <q-img style="width:200px; height:250px " class="q-mx-auto"
                :src="item.imgurl"
            />
            <div class="align text-body2 q-mt-sm"><b> {{item.product_name}}</b></div>
            <div class="align text-caption">Rp.  {{item.harga}} </div>
            <q-rating
                class="q-mx-auto responsive"
                v-model="ratingModel"
                size="1.5em"
                color="indigo-10"
                :max="5"
                readonly
            />
        </div>
    </div>

    <div class="row " >
        <div id="padding" class="col q-mx-auto  column q-ma-xs" v-for="item in images" :key="item.id" style="min-width:200px; max-width:250px">
            <q-img style="width:200px; height:250px " class="q-mx-auto"
                :src="item.imgurl"
            />
            <div class="align text-body2 q-mt-sm"><b> {{item.product_name}}</b></div>
            <div class="align text-caption">Rp.  {{item.harga}} </div>
            <q-rating
                class="q-mx-auto responsive"
                v-model="ratingModel"
                size="1.5em"
                color="indigo-10"
                :max="5"
                readonly
            />
        </div>
    </div>

</div>
</template>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';

export default {
  data () {
    return {
      slide: 'first',
      ratingModel: 5,
      ratingModel1: 4,
      blueModel: true,
      pinkModel: 'Agreed',
      greenModel: 42,
      redModel: true,
      images:[],
      img: './statics/supersale2.jpg',
      DetailProduk: []
      }
  },

  computed: {
    getImgs() {
      this.getImg()
    }
  },

  beforeCreate() {
         let self=this;
    product.getproduct(window )
                .then(function (result) {
                    console.log(result);
                    self.images= result;
                })
                .catch(function (err) {
                    console.log(err);
                });
     }
}
</script>