<script>
import {gettingSSK}  from '../../api/get/index';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  name: "getting",
  

  data() {
    return {
      lorem: "",
      ipsum: "",
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      gettingfieldName: 'photos',
      name : 'testing',
      string : 'string',
      nameFile : '',
      waitedFormData: '',
      waitedFormDataPdf: '',
      filesImage: '',
      filesPdf: ''


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
        gettingSSK.getAllImage(window, this.id).then(function (images) {
          return images.config.url;
        }).catch(function (err) {
          console.log(err)
        });
      }
    },
    methods: {
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
      }
    },
    mounted() {
      this.reset();
    },



};
</script>