<template>
    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 500px; width:100%">
          <q-img
                  src="./statics/logo.png"
           />  
        <h6 style="text-align:center;">Daftar Akun Baru</h6>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
  
          <q-input
            filled
            v-model="firstName"
            label="First Name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Nama pertama harus diisi']"
          />

          <q-input
            filled
            v-model="lastName"
            label="Last Name "
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Nama terakhir harus diisi']"
          />

          <q-radio v-model="jenisKelamin" val="laki-laki" label="Laki-laki" />
          <q-radio v-model="jenisKelamin" val="Perempuan" label="Perempuan" />

          <q-input standout v-model="email" type="email" prefix="Email:" suffix="@gmail.com">
            <template v-slot:prepend>
                <q-icon name="mail" />
            </template>
          </q-input>

          <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Masukkan password anda">
            <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
            </template>
          </q-input>

          <q-input v-model="konfirm_password" filled :type="isP ? 'password' : 'text'" hint="Masukkan ulang password anda">
            <template v-slot:append>
                <q-icon
                    :name="isP ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isP = !isP"
                />
            </template>
          </q-input>

          <q-input
            filled
            type="textarea"
            v-model="alamat"
            label="Alamat Lengkap"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Alamat harus diisi']"
          />

          <q-input
            filled
            v-model="telp"
            label="No. Hp"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'No. HP harus diisi']"
          />

          <div>
            <q-btn label="Registration" type="submit" color="black" class ="full-width" size="lg" />
            </div>
            <div>
            <q-btn label="Reset" type="reset" color="grey-2" class= "full-width" size="lg" />
          </div>
        </q-form>
      </div>
    </div>
<!-- <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card q-mx-auto bg-light-blue-9" >
        <q-card-section>
            <template>
                <div class="q-pa-md" style="max-width: 400px">
                    <label class="text-white"><H4 class="text-center q-mt-none q-mb-md"> <q-icon  name="record_voice_over" class="q-mr-md"/>Form Register</H4></label>
                    <hr >
                    <q-form @submit="onSubmit" @reset="onReset" class="q-pt-md">
                        <Div class="row bg-grey-3 rounded" >
                            <div class="col q-ma-sm">
                                <q-input filled v-model="firstName" label="Nama Depan *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="lastName" label="Nama Belakang *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                               
                            </div>
                            <div class="col q-ma-sm ">
                                <q-input filled v-model="email" label="Email *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="password" label="Password *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="konfirm_password" label="konfirmasi Password. *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />


                            </div>
                        </Div>
                        
                        <div class="row q-mt-md">
                            <div class="col">
                                <q-btn label="Regist" type="Register" color="red-7" class="q-mr-md float-right"/>
                            </div>
                            <div class="col">
                                <q-btn label="Reset" type="reset" color="red-7"  class=" q-ml-md" />
                            </div>
                        </div>
                    </q-form>
                     <br>
                    <br>
                    <router-link to="/login">
                        <center>Already Have an Account?</center>
                    </router-link>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </template>
        </q-card-section>
    </q-card>
</div> -->
</template>

<script>
import register from "../../api/Register/index";

export default {
    name: 'register',
    data () {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      jenisKelamin: "Laki-laki",
      alamat: "",
      telp:"",
      konfirm_password: "",
      isPwd: true,
      isP: true
      }
    },
    methods: {
    onSubmit() {
        let credentials = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          konfirm_password: this.konfirm_password,
          alamat: this.alamat,
          telp: this.telp,
          jenisKelamin: this.jenisKelamin
        };
        const self = this;
        register
          .postUser(credentials, window)
          .then(function(result) {
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });
        alert('Sukses')
        self.$router.push("/");
      }
    },
    onReset() {
      this.firstName = null;
      this.lastName = null;
      this.email = null;
      this.password = null;
      this.alamat = null; 
      this.telp = null;
      this.jenisKelamin = null;
      this.accept = false;
    }
}
</script>