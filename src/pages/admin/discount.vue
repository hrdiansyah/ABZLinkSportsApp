<template>
    <div class="q-pa-md q-gutter-md">
      <div class="row">
      <div class="q-pa-md row items-start" style="max-width: 300px">
        <form class="q-gutter-md">
          <q-input
            filled
            v-model="nameFile"
            label="Nama Diskon *"
          />

          <q-input 
            filled v-model="discountpotongan" 
            prefix="DISCOUNT :"
            suffix="%"
            >
            <template v-slot:before>
              <q-icon name="attach_money" />
            </template>
          </q-input>

          <q-input
            filled
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
            hint="Mask: #.##"
            input-class="text-right"
            v-model="discountnilai"
            label="Nilai Diskon *"
          />

          

          <div class="modal-body">
                <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
              <div>
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" 
                  @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="dropbox">
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
          </div>
        </form>
      </div>
    <!-- Qlist awal -->
    <div class="q-pa-md q-gutter-md col" style="align : center">
    <q-list 
      bordered class="rounded-borders q-mx-auto" 
      style="max-width: auto"
      >

        <q-item class="bg-indigo-13 col-0">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">ID</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nama Diskon</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Diskon
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nilai diskon
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center"> 
          <q-item-label class="q-mt-sm">Action
          </q-item-label>
        </q-item-section>

      </q-item>
        
        <!-- Tabel -->
      <q-item class="bg-grey-2 col-3 text-black" v-for="(discount, index ) in pro" :key="discount.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label class="q-mt-sm">{{discount.diskon}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{discount.potongan}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{discount.nilai}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center">
          <q-item-label lines="1">
           
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(discount)"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(discount.id)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            
          </q-item-label>
        </q-item-section>
      </q-item>
      
    </q-list>
        </div>
            </div>
    <!-- Qlist akhir -->
    
   
  </div>
</template>

<script>
import {uploadKSSKdsc, uploaddsc}  from '../../api/uploaddsc/index';
import discounts from '../../api/Discount/index';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  data () {
    return {  
      current:1,
      updateSubmit: false,
      dialog : false,
      cancelEnabled: false,
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      string : 'string',
      nameFile : '',
      waitedFormData: '',
      filesImage: '',
      discountpotongan: '',
      discountnilai: '',
      imgurl: '',
       pro: [
        {

        }
      ],
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
    async mounted(){
    const response = await 
    discounts
    .getdiscount(window)
        {
          this.Pro=response
          this.reset()
        }
    },
    methods: {

      postDiscount() {

          discounts
          .postdiscount(window, this.nameFile, this.discountpotongan, this.discountnilai, this.nameFile+'.jpg' )
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
        this.discountpotongan= ''
        this.discountnilai= ''
      },

      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;
        uploadKSSKdsc(formData)
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
        this.postDiscount();
      }
    },
};
</script>

