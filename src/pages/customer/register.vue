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
                                <q-input filled v-model="nama_depan" label="username *" class="text-white " lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="nama_belakang" label="Email *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="alamat" label="Password *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="no_Hp" label="konfirmasi Password. *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                
                            </div>
                            <div class="col q-ma-sm ">
                                <q-input filled v-model="nama_depan" label="Nama Depan *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="nama_belakang" label="nama Belakang *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="alamat" label="alamat *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="no_Hp" label="Telp. *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                
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
