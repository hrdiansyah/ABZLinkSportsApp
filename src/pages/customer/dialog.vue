<template>
  <div class="q-pa-md ">
    <q-btn label="Alert" color="primary" @click="alert = true" />
    

    <q-dialog v-model="alert" >
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card q-mx-auto text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
                <q-card-section>
                    <template>
                        <div class="q-pa-md" style="max-width: 700px">
                            <label ><H4 class="text-center q-mt-none q-mb-md"> <q-icon  name="record_voice_over" class="q-mr-md"/> Product Detail</H4></label>
                            <hr >
                        <div class="row">
                            <div class="col q-ma-xs" style="width: 900px">
                                    <q-card class="my-card" >
                                        <q-card-section>
                                            <q-img
                                            src="./statics/11.jpg"
                                            style="width: 100%"
                                            >
                                                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                                                    Caption
                                                </div>
                                            </q-img>

                                            <!-- awal gambar kecil -->
                                            <div class="row">
                                                
                                                <div class="col q-ma-xs">
                                                    <q-img
                                                    src="./statics/11.jpg"
                                                    style="width: 100%"
                                                    />
                                                    
                                                </div>
                                                <div class="col q-ma-xs">
                                                    <q-img
                                                    src="./statics/11.jpg"
                                                    style="width: 100%"
                                                    />
                                                </div>
                                                <div class="col q-ma-xs">
                                                    <q-img
                                                    src="./statics/11.jpg"
                                                    style="width: 100%"
                                                    />
                                                </div>
                                            </div>
                                            <!-- awal gambar kecil -->

                                            <!-- awal desc harga -->
                                            <div class="row">
                                                <div class="col q-ma-xs text-black ">
                                                    <hr>
                                                <label ><b class="text-center"> Nama Product</b></label><br>
                                                <label> Rp. 100.000</label>
                                                    
                                                </div>
                                            </div>
                                            <!-- akhir desc harga -->

                                            <!-- awal tombol -->
                                            <div class="row">
                                                <div class="col q-ma-xs text-black  ">
                                                    <q-btn class="float-right q-mx-md" color="red" >Beli</q-btn>
                                                </div>
                                                <div class="col q-ma-xs text-black " >
                                                    <q-btn color="red" class="q-mx-md">Batal</q-btn>
                                                </div>
                                            </div>
                                            <!-- akhir tombol -->
                                        </q-card-section>
                                    </q-card>
                            </div>

                            <div class="col q-ma-xs">
                                <q-card class="my-card">
                                        <q-card-section class="text-red">
                                            <Label ><u><b>Descripsi</b></u></Label><br>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </q-card-section>
                                    </q-card>
                            </div>
                        </div>
                        </div>
                    </template>
                </q-card-section>
            </q-card>
        </div>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      alert: false,
      

     
    }
  }
}
</script>