
<template>
<q-card class="my-card text-white m bg-grey-4" >
   <!-- {{userNoww}} -->
   <!-- style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)" -->
  <div class="row">
    <div id="form" class="q-mx-auto " outlined style="max-width: 400px">
      <q-card style="width :350px" >
        <q-form  @submit="onSubmit" >
          <div style="height: 70px" class="row bg-grey-6">
            <div class="col " style="max-width: 100px">
              <img src="/statics/logo.png" style="height: 50px; width: 80px; margin-left: 10px" class="q-mt-sm"/>
            </div>
            <div class="col">
              <div class="q-mt-lg">Otentikasi User</div>
            </div>
            
           
          </div>

          <q-card-section>
              <q-input outlined 
              v-model="email" 
              label="email"
              type="text" 
              placeholder="Masukan email" 
              hint=""
              :rules="[
                val =>!!val || 'email di perlukan'
              ]"/>
          </q-card-section>

          <q-card-section>
              <q-input outlined 
              v-model="password" 
              label="Password"
              type="password" 
              placeholder="Masukan password" 
              hint=""
              :rules="[
                val =>!!val || 'password di perlukan'
            ]"/>

          </q-card-section>

          <q-card-section>
              <q-btn
                  push 
                  color="primary"
                  label="Login"
                  class ="full-width"
                  size="md"
                  type="submit"
              />
              <!-- <q-btn 
              push
              :loading="loading4" 
              color="primary" 
              @click="simulateProgress(4)" 
              style="width: 150px"
              class="full-width"
              size="lg"
              type="submit"
              > -->
                  <!-- Login
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Loading...
                  </template>
              </q-btn> -->
          </q-card-section>
        </q-form>
      </q-card>
    </div>
  </div>
</q-card>
</template>

<style scoped>

  #form{
    /* margin-left: 30%;
    margin-top: 20%;
    margin: auto; */
    margin-top: 15%; 

  }
  .m {
    height: 730px;
  }
  
</style>

<script>
import login from '../../api/Login/index';

export default {

  data() {
    return {
      // userNow:"",
      email : "",
      password : "",
      loading4: false,
    }
  },
  // computed:{
  //   userNoww(){
  //           this.$ls.get("userNow");
  //   }
  // },
  methods : {
    

    onSubmit() {
      
      let self = this;
      
      login
      .loginUser(window, self.email, self.password )
      .then(function(result)
        {
             
            if(result){
              localStorage.setItem('id', result.id)
              localStorage.setItem('email', result.email)
              localStorage.setItem('role', result.role)
              

              if(result.role=='admin' ){
                self.$router.push('/admin/')
              } else if (result.role=='owner'){
                self.$router.push('/owner/')
              } else if (result.role=='customer') {
                self.$router.push('/cust/dash')
                if(result.role=='customer' && localStorage.getItem('id_product') != null){
                    self.$router.push('/cust/detail')
                } else {
                    self.$router.push('/cust/dash')
                }
              } else {
                self.$router.push('/login')
              }
            }
        })
      .catch(function(err){
        console.log(err);
      });
    },
      onReset() {
      this.email = null;
      this.password = null;
      }
    }
  }
</script>