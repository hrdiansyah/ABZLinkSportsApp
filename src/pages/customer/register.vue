<template>
    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 500px; width:100%">
          <img src="/statics/logo.png" style="height: 150px; width: 250px; margin-left: 95px">  
        <h6 style="text-align:center;">Daftar Akun Baru</h6>
        <q-form @submit="onSubmit()" @reset="onReset()" class="q-gutter-md">
  
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

          <q-radio v-model="jenisKelamin" val="Laki-laki" label="Laki-laki" color="cyan-8" />
          <q-radio v-model="jenisKelamin" val="Perempuan" label="Perempuan" color="cyan-8"/>
          <!-- <div class="q-px-sm q-mt-sm">
            Jenis Kelamin : <strong>{{ jenisKelamin }}</strong>
          </div> -->

          <q-input standout v-model="email" type="email" prefix="Email:" >
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

          <!-- <q-input v-model="konfirm_password" filled :type="isP ? 'password' : 'text'" hint="Masukkan ulang password anda">
            <template v-slot:append>
                <q-icon
                    :name="isP ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isP = !isP"
                />
            </template>
          </q-input> -->

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

           <!-- <q-input
            filled
            v-model="jenisKelamin"
            label="Jenis Kelamin "
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Jenis Kelamin  harus diisi']"
          /> -->

          <div>
            <q-btn label="Registration" type="submit" color="black" class ="full-width" size="lg" />
            </div>
            <div>
            <q-btn label="Reset" type="reset" color="grey-7 text-black" class= "full-width" size="lg" />
          </div>
        </q-form>
      </div>
    </div>

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
      alamat: "",
      telp:"",
      jenisKelamin: "",
      isPwd: true
      }
    },
    methods: {
    onSubmit() {
        let credentials = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          alamat: this.alamat,
          telp: this.telp,
          jenisKelamin: this.jenisKelamin
        };
        const self = this;
        register
          .postUser(credentials, window, self.firstName, self.lastName, self.email,
          self.password, self.alamat, self.telp, self.jenisKelamin)
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