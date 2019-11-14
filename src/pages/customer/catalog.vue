<template>
    <div>
        <div class="row">
            <div class="col">

                <input type="hidden" class="float-right" v-model="Jersey_Bola">
                <q-btn color="blue" label="Jersey Bola" class="sp float-right q-my-md q-mx-sm" size="sm"  @click="findByName1()"/>
                
                <input type="hidden" class="float-right"  v-model="Jersey_Basket">
                <q-btn color="blue"  label="Jersey Basket" class="sp float-right q-my-md" size="sm" @click="findByName2()" />

                <input type="hidden" class="float-right" v-model="Bola">
                <q-btn color="blue" label="Bola" class="sp float-right q-my-md q-mx-sm" size="sm"  @click="findByName3()"/>
                
                <input type="hidden" class="float-right"  v-model="Badminton">
                <q-btn color="blue"  label="Badminton" class="sp float-right q-my-md" size="sm" @click="findByName4()" />
                <q-btn color="blue" type="replace" label="All" class="sp float-right q-my-md q-mx-sm" size="sm" @click="findByName5()"/>
                <label class="sp float-right q-my-md q-mx-sm">Filter :</label>
            </div>
        </div>

        <div class="row " >
            <div id="padding" class="col q-mx-auto  column q-ma-xs" flat v-for="item in images" :key="item.id" style="min-width:200px; max-width:250px" @click="show(item)">
                    <div class="row">
                      <div class="col">
                          <q-img style="width:200px; height:250px " class="q-mx-auto"
                          :src="item.imgurl"
                          />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="align text-body2 q-mt-sm"><b> {{item.product_name}}</b></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="align text-caption"> Rp.  {{item.harga}} </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col align">
                        <q-rating
                          class=" responsive"
                          v-model="ratingModel"
                          size="1em"
                          color="indigo-10"
                          :max="5"
                          readonly
                        />
                      </div>
                    </div>
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
      images:[],
      img: './statics/supersale2.jpg',
      DetailProduk: [],
      getData:'',
      Jersey_Bola:'string',
      Jersey_Basket:'jersey basket',
      Bola : 'bola',
      Badminton : 'badminton'
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
     },
     methods :{

       show(item){
       localStorage.setItem('id_product', item.id)
       localStorage.setItem('imgurl',item.imgurl)
       this.$router.push('/cust/detail')
      },
      findByName1() {
            try {
                const self = this
                product.getProductByKat(window, self.Jersey_Bola )
                .then(function (result){
                return  self.images=result.data
            })
            } catch (error) {
                console.log(error.message);
            }
        },
        findByName2() {
            try {
                const self = this
                product.getProductByKat(window, self.Jersey_Basket )
                .then(function (result){
                return  self.images=result.data
            })
            } catch (error) {
                console.log(error.message);
            }
        },
        findByName3() {
            try {
                const self = this
                product.getProductByKat(window, self.Bola )
                .then(function (result){
                return  self.images=result.data
            })
            } catch (error) {
                console.log(error.message);
            }
        },
        findByName4() {
            try {
                const self = this
                product.getProductByKat(window, self.Badminton )
                .then(function (result){
                return  self.images=result.data
            })
            } catch (error) {
                console.log(error.message);
            }
        }
     },
}
</script>