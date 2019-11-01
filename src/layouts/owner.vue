<template>
  <div class="q-pa-sm">
    <div class="row bg-grey-10 text-white rounded" style="height:70px">
      <div class="col  q-my-lg q-ml-lg" style="max-width:40%">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="q-mr-md"/>AbzLinkSport
      </div>
      <div class="col  q-my-lg q-ml-lg" style="max-width:55%">
        <button style="max-width:30%" class="float-right q-mr-md">Cari</button>
        <input type="text" v-model="search" placeholder="Search" class="q-mr-sm float-right" style="max-width:60%">
      </div>
      
      <div class="col bg-white q-my-md q-mr-xs" style="max-width:1px"/>
      
      <div class="col flex flex-center" style="max-width:80px">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
    </div>
    <div class="row bg-grey-10">
      <div class="col">
        <hr class="text-white">
      </div>
    </div>
    
    <!-- body -->
    <div class="row q-my-md">
      <div class="col">
        <div class="row  text-white"  >
          <div class="col " style="max-width:150px ">
            <q-card class="my-card bg-grey-10" tyle="max-height:100%" >
              <q-card-section>
                Dashboard<p/>
                Penjualan<p/>
                keuangan<p/>
                Stok Barang<p/>
                Grafik<p/>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-ml-md" style="max-width:100%">
            
                <div class="q-pa-sm">
                  <q-page-container>
                    <router-view />
                  </q-page-container>
                </div>
              
          </div>
        </div>
      </div>
    </div>
    <!-- body -->

      <!-- Awal Footer -->
      <q-card class="my-card bg-grey-8">
        <q-card-section>
          <div class="row q-ma-md text-white"  >
            <div class="col " style="max-width:30%">
              <h6 class="q-ma-none q-mb-sm">Service</h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been  
            </div>

            <div class="col bg-white q-ma-sm" style="max-width:1px ">
                <q-separator-vertical/>
            </div>

            <div class="col " style="max-width:30%">
                <div class="q-mx-sm">
                    <h6 class="q-ma-none ">Categories</h6>
                    <p class="q-ma-none">Product <br>About Us <br>Testimoni <br>Price Tables <br> Crew <br> Portofolio
                    </p>
                </div>
            </div>

            <div class="col " style="max-width:30%">
                <h6 class="q-my-none q-mb-sm q-ml-lg" >Partner</h6>
                <div class="q-ml-lg">
                Product <br>About Us <br>Testimoni <br>Price Tables <br> Crew <br> Portofolio
                </div>
            </div>

            <div class="col bg-white q-ma-sm" style="max-width:1px ">
                <q-separator-vertical/>
            </div>

            <div class="col flex flex-center " >
              Logout
            </div>
          </div>
        </q-card-section> 
      </q-card >
      <!-- Akhir Footer -->
  </div>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  data () {
    return {
      drawer: false,
      menuList,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
    
  }
}
</script>