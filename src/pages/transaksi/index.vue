<template>
<div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
        

      
        <div class="col-6">
        <q-card>
            <q-card-section>
            <div class="text-h4 flex flex-center" style= "color : black" >Detail Pembeli</div>
            </q-card-section>
            <q-separator white inset />
            <q-card-section>
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
                  Nama  :
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
              HARDIANSYAH BIN SUKIMAN
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
                 Alamat  :
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
              MAMPANG CITY OF DOWNTOWN
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
              No Telepon  :
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
            0811111999
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
            NAMA BANK
            </q-card-section>
            
            <q-card-section class="text-h6 text-center" style= "color : black">
               Nomor Rekening :
            </q-card-section>
            <q-card-section class="text-h6 text-center" style= "color : black">
            70581818
            </q-card-section>
        </q-card>
      </div>
    <q-dialog v-model="alert">
      <q-card style="width:500px">
        <q-card-section>
          <div id="form" class="q-mx-auto" style="max-width: 900px">
              <q-form class="q-gutter-md">
                  <q-input 
                    filled v-model="tanggal" 
                    type="date" 
                    hint="Tanggal" 
                    />
                  <q-input 
                    filled v-model="nama" 
                    label="Masukkan Nama *" 
                    hint="Nama Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                  <q-input 
                    filled v-model="alamat" 
                    label="Masukkan Alamat *" 
                    hint="Alamat Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                  <q-input 
                    filled v-model="telepon" 
                    label="Masukkan Telepon *" 
                    hint="Telepon Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                <div class="q-gutter-sm">
                    <q-radio v-model="pengiriman" val="JNE Express" label="JNE Express" color="black" />
                    <q-radio v-model="pengiriman" val="Paxel Express" label="Paxel Express" color="black" />
                    </div>
                    <div class="q-px-sm q-mt-sm">
                    Jasa Pengiriman : <strong>{{pengiriman}}</strong>
                    </div>
                  <q-input 
                    filled v-model="catatan" 
                    label="Masukkan Catatan *" 
                    hint="Catatan Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                <q-card-section>
                <div class="flex flex-center">
                    <q-btn color="grey-6" label="Pesan Sekarang" />
                </div>
                </q-card-section>
                <q-card-section>
                <div class="flex flex-center">
                    <q-btn  label="Batal" color="grey-6" @click="batal()" />
                </div>
               
                </q-card-section>
              </q-form>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    
        
      <div class="col-6">
        <q-card dark bordered class="bg-white my-card">
            <q-card-section>
            <div class="text-h4 flex flex-center" style= "color : black" >Deskripsi</div>
            </q-card-section>
            <q-separator white inset />
            
            
            <div class="col-6">
             <q-carousel
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite        
        id="coba"
        class="responsive"
        >
        <q-carousel-slide :name="1" img-src="./statics/baju/ac.jpg" />
        <q-carousel-slide :name="2" img-src="./statics/baju/juve2.jpg"  />
        <q-carousel-slide :name="3" img-src="./statics/baju/arsenal.jpg"  />
        <q-carousel-slide :name="4" img-src="./statics/baju/madrid.jpg"  />
        </q-carousel>
            </div>
            <div class="col-6">
                <q-card-section>
            </q-card-section>
            <q-card-section id="coba1" class="text-h6 " style= "color : black">
            Nama Barang 
            </q-card-section>
            <q-card-section>
             
            </q-card-section>
            <q-card-section id="coba1" class="text-h6" style= "color : black">
            Kondisi
            </q-card-section>
            <q-card-section>
             
            </q-card-section>
            <q-card-section id="coba1" class="text-h6" style= "color : black">
            Harga
            </q-card-section>
            <q-card-section>
             
            </q-card-section>            
            <q-card-section id="coba1" class="text-h6" style= "color : black">
            Keterangan
            </q-card-section>
            <q-card-section id="coba1">
             <q-btn label="Pesan Sekarang" color="grey-6" @click="alert=true" />
            </q-card-section>
            
            </div>            
             
        </q-card>
        </div>
    </div>
    <div id="margin">
        <q-card dark bordered class="bg-white">
            <q-card-section>
            <div class="text-h4 flex flex-center" style= "color : black" >Produk Lainnya</div>
            </q-card-section>
        </q-card>
            <q-card dark bordered class="bg-white">
            <div class="q-col-gutter-md row items-start">
            <div class="col-3">
                <q-card-section class="a bg-white">
                <q-img
                src="../statics/baju/mcu.jpg"
                style="width: 100%"
                >
                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                    Rp 200.000
                </div>
                </q-img>
                </q-card-section>
                <q-card-section class="a bg-white">
                <div class="flex flex-center text-h6" style= "color : black">Jersey Manchester United</div>
                </q-card-section>
            </div>
            
            <div class="col-3">
                <q-card-section class="a bg-white">
                <q-img
                src="../statics/baju/madrid.jpg"
                style="width: 100%"
                >
                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                    Rp 320.000
                </div>
                </q-img>
                </q-card-section>
                <q-card-section class="a bg-white">
                <div class="flex flex-center text-h6" style= "color : black">Jersey Real Madrid</div>
                </q-card-section>
            </div>
            <div class="col-3">
                <q-card-section class="a bg-white">
                <q-img
                src="../statics/baju/liv.jpg"
                style="width: 100%"
                >
                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                    Rp 250.000
                </div>
                </q-img>
                </q-card-section>
                <q-card-section class="a bg-white">
                <div class="flex flex-center text-h6" style= "color : black">Jersey Liverpool</div>
                </q-card-section>
            </div>
            
            <div class="col-3">
                <q-card-section class="a bg-white">
                <q-img
                src="../statics/baju/tot.jpg"
                style="width: 100%"
                >
                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                    Rp.195.000
                </div>
                </q-img>
                </q-card-section>
                <q-card-section class="a bg-white">
                <div class="flex flex-center text-h6" style= "color : black">Jersey Tottenham</div>
                </q-card-section>
            </div>
            </div>
            </q-card>
    </div>
</div>
</template>

<style scoped>
    .my-card {
         height: 531px;
         width: 100%;
         max-width: auto
    }
    .bawah {
         margin-top: 1%;
         height: 70px;
         width: 100%;
         max-width: auto
    }
    .a {
            border:1px solid grey;
    }
     #padding {
    padding:10px;
  }

      #margin{
        margin-top:20px;
      }
  #coba{
      height: 250px;
      width: 250px;
  }
   #coba1{
    left: 250px;
    bottom:  250px;
  }
  #center{
      text-align: center;
      
  }
 
</style>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';
export default {
      
      data () {
    return {
      slide: 1,
      alert: false,
        form: {
                nama: '',
                alamat: '',
                telepon: '',
                pengiriman: '',
                catatan:''
            },
        batal() {
                alert = false
            }
    }
  }
}
</script>