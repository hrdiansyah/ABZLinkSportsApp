<template>


    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 500px; width:100%">
        <h4 style="text-align:center;">Upload Product Details</h4>
        <q-form class="q-gutter-md">
  
          <q-input
            filled
            v-model="nameFile"
            label="Nama Product"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="qty"
            label="Qty"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="category"
            label="Product Category"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="harga"
            label="Harga"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="desc"
            label="Product Deskripsi"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

<<<<<<< HEAD
          <q-input
            filled
            v-model="berat"
            label="Berat"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
=======
          
>>>>>>> 9860c9c1abfa2bc331c8558105dcf81974ef18c3
           
          <div class="modal-body">
                <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
              <div>
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="dropbox">
                <p v-if="isInitial">
                  Drag your Image file(s) into the box to begin
                </p>
                <p v-if="isSaving">
                  Uploading {{ fileCount }} files...
                </p>
              </div>
            </form>
            <div class="dropbox" v-if="isFailed" @click="$emit('close')">
              <br>
              <p v-if="isFailed" style="color: #95D600">Upload Success
              </p>
            </div>
          </div>

          <div>
            <q-btn label="Submit" type="submit" color="black" @click="submit(waitedFormData)"/>
            <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" @click="reset"/>
            <q-btn color="black"   label="Cek Barang" size="md" to="/admin/barang"/>
            <q-btn color="black"   label="Cek Landing" size="md" to="/"/>
        
          </div>
        </q-form>
      </div>
    </div>

</template>

<script>
import {uploadKSSK, upload}  from '../../api/upload/index';
import product from '../../api/Produk/index';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  name: "upload",
  

  data() {
    return {
      lorem: "",
      ipsum: "",
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      name : 'testing',
      string : 'string',
      nameFile : '',
      waitedFormData: '',
      waitedFormDataPdf: '',
      filesImage: '',
      filesPdf: '',
      productName: '',
      qty: '',
      category: '',
      berat:'',
      desc: '',
      harga: '',
      imgurl: '',
      img: ''


    };
  },


  computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      },
      getImage() {
        upload.getAllImage(window, this.id).then(function (images) {
          return images.config.url;
        }).catch(function (err) {
          console.log(err)
        });
      }
    },
    methods: {

      postProduct() {

          product
          .postproduct(window, this.nameFile, this.harga, this.qty, this.category, this.desc,this.berat, this.nameFile+'.jpg' )
          .then(function(result) {
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });

      },

        reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
        this.nameFile = ''
      },

      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;
        uploadKSSK(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });

      },

      filesChange(fieldName, fileList) {
        
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            let newNameFile = this.nameFile + '.jpg'
            this.filesImage = newNameFile
            formData.append(fieldName, fileList[x], newNameFile);
          });

        // save it

        this.waitedFormData = formData
        
      },

      submit(waitedFormData) {
        
        this.save(waitedFormData);
        this.postProduct();
      }
    },
    mounted() {
      this.reset();
    },
};
</script>