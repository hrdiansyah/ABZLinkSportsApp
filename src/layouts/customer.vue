<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default{
  data(){
    return{

    }
  },
  async  mounted(){
    let getRole = await localStorage.getItem('role');
    if(getRole !='customer' || getRole ==='owner'){
         this.$router.push('/owner/')
      }
       else if(getRole !='customer' || getRole ==='admin'){
         this.$router.push('/admin')
      } else {
        alert(' anda login sebagai customer')
      } 
    },
    methods :{
      logout(){
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        this.$router.push('/login');
      }
    }
  }
</script>