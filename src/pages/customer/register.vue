<template>
<div class="q-pa-md row items-start q-gutter-md">
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
                                <q-input filled v-model="repassword" label="konfirmasi Password. *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />


                            </div>
                        </Div>
                        
                        <div class="row q-mt-md">
                            <div class="col">
                                <q-btn label="Regis" type="Register" color="red-7" class="q-mr-md float-right"/>
                            </div>
                            <div class="col">
                                <q-btn label="Reset" type="reset" color="red-7"  class=" q-ml-md" />
                            </div>
                        </div>
                    </q-form>
                </div>
            </template>
        </q-card-section>
    </q-card>
</div>
</template>

<script>
export default {
    data(){
    return {
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      role : ""
    }
  },
    methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:8080/api/users', {
    firstName: self.firstName,
    lastName: self.lastName,
    email: self.email,
    password: self.password,
    role: self.role
    })
    .then(function (response) {
      return self.$router.push('/table')
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>