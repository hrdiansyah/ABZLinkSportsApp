<template>
    <div>
        <div class="row">
            <div class="col" style="max-width:100%; height:150px">
            <q-card class="my-card newitem" style="height:100%">
                <div class="q-ml-xl q-pt-sm"> <q-icon color="red" name="my_location" size="md" /> 
                <b class="text-h6 text-red"> Detail Pengiriman </b> </div>
                <br>
                <div class="row"> 
                    <div class="col" style="max-width:28%">
                        <div class="q-ml-xl"> Nama Penerima : </div>
                        <div class="q-ml-xl text-h4"><b> Hardiansyah </b></div>
                    </div>

                    <div class="col" style="max-width:72%">
                        <div class="q-ml-xl"> Alamat Penerima : </div>
                        <div class="q-ml-xl text-h6"> {{ images.Alamat }} {{ images.Kecamatan }} {{ images.Kota }}
                            {{ images.Provinsi }} , {{ images.Kodepos }} {{ images.Negara }}
                             </div>
                    </div>
                </div>  
            </q-card>
            </div>
        </div>
        <div style="height: 20px"/>
        <div class="row">
            <div class="col" style="max-width:30%">
              <q-card class="my-card newitem" style="height:100%">
                <q-img :src="images.imgurl" />
              </q-card>
            </div>
            
            <div class="col" style="max-width:70%">
                <q-card style="height:100%">
                    <q-card-section>
                      <b class="text-h4"> Jersey Manchester United </b> 
                      <div class="q-mt-sm text-h6"> Rp. {{images.Harga_barang}} </div>
                      <br>
                      <b class="text-h4"> Metode Pembayaran </b> 
                      <div class="q-mt-sm text-h6"> {{images.Metode_pembayaran}} </div>
                      <br>
                      <b class="text-h4"> Potongan harga </b> 
                      <div class="q-mt-sm text-h6"> Rp. {{images.Discont}} </div> 
                      <b class="text-h4"> Shipping </b> 
                      <div class="q-mt-sm text-h6">  {{images.Shipping}} </div>
                      <b class="text-h4"> Sub Total </b> 
                      <div class="q-mt-sm text-h6"> Rp. {{images.Sub_total}} </div>
                      <b class="text-h4"> Total </b> 
                      <div class="q-mt-sm text-h6"> Rp. {{images.Total}} </div>        
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
    
</template>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';
import payments from '../../api/transaksi/index';
export default {
  data () {
    return {
      images:[],
      img: './statics/supersale2.jpg',
      ratingModel: 5
      }
  },

  computed: {
    getImgs() {
      this.getImg()
    }
  },

  beforeCreate() {
    let getId_transaksi= localStorage.getItem('id_transaksi');
    console.log(getId_transaksi)
    let self=this;
    
    payments.getpayments(window, getId_transaksi )
        .then(function (result) {
            console.log('test', result)
            if(result){
                self.images=result;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
   },
}
</script>